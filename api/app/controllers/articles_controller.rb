class ArticlesController < ApplicationController
  before_action :find_article, only: [:show, :update]
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
    @article.save

    render json: ArticleResponseSerializer.new(@article)
  end

  def update
    unless @article.update(upsert_article_params)
      return render json: nil, status: :bad_request
    end
    render json: ArticleResponseSerializer.new(@article)
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

class ArticleListResponseSerializer
  include ActiveModel::Serializers::JSON
  attr_accessor :items

  def initialize(articles)
    @items = articles.map { |article| ArticleSerializer.new(article) }
  end

  private
  def attribute_names_for_serialization = %i[items]
end

class ArticleResponseSerializer
  include ActiveModel::Serializers::JSON
  
  attr_accessor :article

  def initialize(article)
    @article = ArticleSerializer.new(article)
  end

  private

  def attribute_names_for_serialization = %i[article]
end

class ArticleSerializer
  include ActiveModel::Serializers::JSON
  delegate :id, :title, :body, to: :@article

  def initialize(article)
    @article = article
  end

  private

  def attribute_names_for_serialization = %i[id title body]
end
