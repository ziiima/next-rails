class ArticleDeleteResponseSerializer
    include ActiveModel::Serializers::JSON
    attr_accessor :id

    delegate :id, to: :@article

    def initialize(article)
        @article = article
    end

    private
    def attribute_names_for_serialization = %i[id]
end
