require 'rails_helper'

RSpec.describe "Comments", type: :request do
  describe "GET /articles/{id}/comments" do
    include Committee::Rails::Test::Methods
    let(:article) { Article.create(title: "title", body: "bodybodybody") }
    it "ok" do
      get "/articles/#{article.id}/comments"
      assert_response_schema_confirm(200)
    end
  end
end
