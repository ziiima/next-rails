class ArticleCommentSerializer
    include ActiveModel::Serializers::JSON
    attr_accessor :id, :commenter, :body
    delegate :id, :commenter, :body, to: :@comment

    def initialize(comment)
        @comment = comment
    end

    private
    def attribute_names_for_serialization = %i[id commenter body]
end
