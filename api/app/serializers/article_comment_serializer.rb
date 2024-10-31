class ArticleCommentSerializer
    include ActiveModel::Serializers::JSON
    attr_accessor :id, :commenter, :body, :status

    delegate :id, :commenter, :status, :body, to: :@comment

    def initialize(comment)
        @comment = comment
    end

    private
    def attribute_names_for_serialization = %i[id commenter body status]
end
