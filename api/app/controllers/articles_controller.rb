class ArticlesController < ApplicationController
  before_action :find_article, only: [:show, :update, :destroy]
  def index
    @articles = Article.all
    render json: ArticleListResponseSerializer.new(@articles), status: :ok
  end

  def show
    article = ArticleResponseSerializer.new(@article)
    render json: article
  end

  def create
    @article = Article.new(upsert_article_params)
    if @article.invalid?
      return render json: nil, status: :bad_request
    end

    unless @article.save
      return render json: nil, status: :bad_request
    end

    render json: ArticleResponseSerializer.new(@article)
  end

  def update
    unless @article.update(upsert_article_params)
      return render json: nil, status: :bad_request
    end
    render json: ArticleResponseSerializer.new(@article)
  end

  def destroy
    @article.destroy
    unless @article.destroyed?
      render json: nil, status: :interinternal_server_error 
      return
    end
    render json: ArticleDeleteResponseSerializer.new(@article)
  end

  private

  def find_article
    @article = Article.find_by(id: params[:id])
    if @article.nil?
      render json: nil, status: :not_found
    end
  end

  def upsert_article_params
    params.require(:dto).permit(:title, :body)
  end
end
