class ArticleSerializer
    include ActiveModel::Serializers::JSON
    delegate :id, :title, :body, to: :@article
  
    def initialize(article)
      @article = article
    end
  
    private
  
    def attribute_names_for_serialization = %i[id title body]
end
