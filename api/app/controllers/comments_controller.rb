class CommentsController < ApplicationController
    before_action :find_article, only: [:index, :create]

    def index
        render json: ArticleCommentListResponseSerializer.new(@article.comments)
    end

    def create
        @comment = Comment.new(upsert_parameter)
        return render json: nil, status: :bad_request if @comment.invalid?
        return render json: nil, status: :interinternal_server_error unless @comment.save

        render json: ArticleCommentResponseSerializer.new(@comment)
    end

    private

    def find_article
        @article = Article.find_by(id: params[:article_id])
        render json: nil, status: :not_found if @article.nil?
    end

    def upsert_parameter
        params.require(:dto).permit(:commenter, :body).merge(article: @article)
    end
end
