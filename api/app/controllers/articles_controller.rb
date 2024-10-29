class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    render json: { items: @articles }, status: :ok
  end
end
