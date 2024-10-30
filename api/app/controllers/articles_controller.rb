class ArticlesController < ApplicationController
  before_action :find_article, only: [:show]
  def index
    @articles = Article.all
    render json: { items: @articles }, status: :ok
  end

  def show
    article = ArticleResponseSerializer.new(@article)
    render json: article
  end

  private

  def find_article
    @article = Article.find_by(id: params[:id])
    if @article.nil?
      render json: nil, status: 404
    end
  end
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
