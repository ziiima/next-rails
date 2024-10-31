class CommentsController < ApplicationController
    before_action :find_article, only: [:index]

    def index
        render json: ArticleCommentListResponseSerializer.new(@article.comments)
    end

    private
    def find_article
        @article = Article.find_by(id: params[:article_id])
        render json: nil, status: :not_found if @article.nil?
    end
end
