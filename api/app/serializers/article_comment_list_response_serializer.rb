class ArticleCommentListResponseSerializer
    include ActiveModel::Serializers::JSON
    attr_accessor :items

    def initialize(comments)
        @items = comments.map { |comment| ArticleCommentSerializer.new(comment) }
    end

    private
    def attribute_names_for_serialization = %i[items]
end
