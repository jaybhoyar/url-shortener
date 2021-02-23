class UrlsController < ApplicationController

  def index
    urls = Url.all
    render status: :ok, json: { urls: urls }
  end

  def create
    url = Url.new(url_params)
    url.slug = generate_slug
    if url.save
      render status: :ok, json: { notice: "Link shorten successfully"}
    else
      render status: :unprocessable_entity, json: { errors: url.errors.full_messages }
    end
  end

  private
    def url_params
      params.require(:url).permit(:original_link, :pinned)
    end

    def generate_slug
      loop do
        new_slug = [*("a".."z"), *("0".."9")].shuffle[0, 6].join
        break new_slug unless Url.where(slug: new_slug).exists?
      end
    end

end
