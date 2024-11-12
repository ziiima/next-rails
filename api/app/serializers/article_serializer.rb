class ArticleSerializer
    include ActiveModel::Serializers::JSON
    delegate :id, :title, :body, :status, to: :@article

    def initialize(article)
      @article = article
    end

    private

    def attribute_names_for_serialization = %i[id title body status]
end
