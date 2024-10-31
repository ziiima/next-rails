require 'rails_helper'

RSpec.describe "Articles", type: :request do
  describe "GET /articles" do
    include Committee::Rails::Test::Methods
    it "ok" do
      get "/articles"
      assert_response_schema_confirm(200)
    end
  end

  describe "POST /articles" do
    include Committee::Rails::Test::Methods
    it "ok" do
      expect {
        post "/articles", params: { dto: { title: "title", body: "bodybodybody", status: "public" } }
      }.to change(Article, :count).by(1)
      assert_response_schema_confirm(200)
    end
  end

  describe "GET /articles/:id" do
    include Committee::Rails::Test::Methods
    let(:article) { Article.create(title: "title", body: "bodybodybody") }

    it "when exist" do
      get "/articles/#{article.id}"
      assert_response_schema_confirm(200)
    end
  end

  describe "PUT /articles/:id" do
    include Committee::Rails::Test::Methods
    let(:article) { Article.create(title: "title", body: "bodybodybody", status: "private") }

    it "ok" do
      put "/articles/#{article.id}", params: { dto: { title: "title", body: "bodybodybody", status: "public" } }
      assert_response_schema_confirm(200)
    end
  end

  describe "DELETE /articles/:id" do
    include Committee::Rails::Test::Methods
    let(:article) { Article.create!(title: "title", body: "bodybodybody", status: "private") }

    it "ok" do
      delete "/articles/#{article.id}"
      assert_response_schema_confirm(200)
      expect(Article.find_by(id: article.id)).to be_nil
    end
  end
end
