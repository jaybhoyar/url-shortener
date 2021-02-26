class UrlsController < ApplicationController
  before_action :find_url, only: %i[show update]

  def index
    urls = Url.all.order("pinned DESC, updated_at DESC")
    render status: :ok, json: { urls: urls }
  end

  def create
    url = Url.new(url_params)
    url.slug = generate_slug
    if url.save
      render status: :ok, json: { notice: "Link shorten successfully"}
    else
      render status: :unprocessable_entity, json: { errors: "Invalid url input" }
    end
  end

  def show
    increment_click_count
    redirect_to @url.original_link
  end

  def update
    if @url.toggle(:pinned).save
      render status: :ok, json: { url: @url}
    else
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end

  end

  private
    def url_params
      params.require(:url).permit(:original_link, :pinned, :slug)
    end

    def find_url
      @url = Url.find_by!(slug: params[:slug])
      rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
    end

    def generate_slug
      loop do
        new_slug = [*("a".."z"), *("0".."9")].shuffle[0, 6].join
        break new_slug unless Url.where(slug: new_slug).exists?
      end
    end

    def increment_click_count
      @url.increment!(:click_count)
    end

end
