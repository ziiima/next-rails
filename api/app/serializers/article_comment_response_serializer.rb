class ArticleCommentResponseSerializer
    include ActiveModel::Serializers::JSON
    attr_accessor :comment
    
    def initialize(comment)
        @comment = ArticleCommentSerializer.new(comment)
    end

    private
    def attribute_names_for_serialization = %i[comment]
end
