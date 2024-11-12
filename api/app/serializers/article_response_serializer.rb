class ArticleResponseSerializer
    include ActiveModel::Serializers::JSON

    attr_accessor :article

    def initialize(article)
      @article = ArticleSerializer.new(article)
    end

    private

    def attribute_names_for_serialization = %i[article]
end
