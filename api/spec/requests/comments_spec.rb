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

  describe "POST /articles/{article_id}/comments" do
    include Committee::Rails::Test::Methods
    let(:article) { Article.create(title: "title", body: "bodybodybody") }

    it "ok" do
      expect {
        post "/articles/#{article.id}/comments", params: { dto: { commenter: "me", body: "comment_body" } }
      }.to change(Comment, :count).by(1)
      assert_response_schema_confirm(200)
    end
  end
end
