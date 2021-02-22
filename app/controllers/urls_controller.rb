class UrlsController < ApplicationController

  def index
    urls = Url.all
    render status: :ok, json: { urls: urls }
  end

  def create
    url = Url.new(url_params)
    if url.save
      render status: :ok, json: { notice: "Link shorten successfully" }
    else
      render status: :unprocessable_entity,
             json: { errors: link.errors.full_messages.to_sentence }
    end
  end

  private
    def url_params
      params.require(:url).permit(:original_link, :pinned)
    end

end
