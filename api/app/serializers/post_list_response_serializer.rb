class PostListResponseSerializer
  include ActiveModel::Serializers::JSON
  attr_accessor :items

  def initialize(posts)
    @items = posts.map { |post| PostResponseSerializer.new(post) }
  end

  private
    def attribute_names_for_serialization = %i[items]
end
