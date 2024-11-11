class PostsController < ApplicationController
    def index
        @posts = Post.all
        render json: PostListResponseSerializer.new(@posts)
    end
end
