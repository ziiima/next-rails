class BlogsController < ApplicationController
    def index
        render json: { items: [], currentPage: 1, perPage: 50, totalCount: 100 }, status: :ok
    end
end
