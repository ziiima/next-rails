class PostResponseSerializer
  include ActiveModel::Serializers::JSON
  delegate :title, :body, :id, to: :@post_response

  def initialize(post_response)
    @post_response = post_response
  end

  private
    def attribute_names_for_serialization = %i[title body id]
end
