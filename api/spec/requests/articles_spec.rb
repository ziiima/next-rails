require 'rails_helper'

RSpec.describe "Articles", type: :request do
  describe "GET /articles" do
    include Committee::Rails::Test::Methods
    it "ok" do
      get "/articles"
      assert_response_schema_confirm(200)
    end
  end
end
