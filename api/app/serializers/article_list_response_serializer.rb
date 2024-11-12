class ArticleListResponseSerializer
    include ActiveModel::Serializers::JSON
    attr_accessor :items

    def initialize(articles)
      @items = articles.map { |article| ArticleSerializer.new(article) }
    end

    private
    def attribute_names_for_serialization = %i[items]
end
