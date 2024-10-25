require 'rails_helper'

RSpec.describe "Blogs", type: :request do
  describe "GET /blogs" do
    include Committee::Rails::Test::Methods
    it 'ok' do
      get "/blogs"
      assert_response_schema_confirm(200)
    end
  end
end
