require 'rails_helper'

RSpec.describe Article, type: :model do
  let(:article) { Article.new(title: "title", body: "abcdefghij", status: "public") }
  describe 'invalid title' do
    it 'when null' do
      article.update({ title: nil })
      expect(article.valid?).to eq false
      expect(article.errors[:title]).to include("can't be blank")
    end

    it "when length of 0" do
      title = ""
      article.update({ title: title })
      expect(article.valid?).to eq false
      expect(article.errors[:title]).to include("can't be blank")
    end

    it "when over length of 255" do
      title = "a" * 256
      article.update({ title: title })
      expect(article.valid?).to eq false
      expect(article.errors[:title]).to include("is too long (maximum is 255 characters)")
    end
  end

  describe "valid title" do
    it "should valid when length of 1" do
      article.update(title: "t")
      expect(article.valid?).to eq true
    end

    it "should valid when length of 255" do
      title = "t" * 255
      article.update(title: title)
      expect(article.valid?).to eq true
    end
  end

  describe "invalid body" do
    it "when null" do
      article.update({ body: nil })
      expect(article.valid?).to eq false
      expect(article.errors[:body]).to include("can't be blank")
    end

    it "when 0" do
      article.update({ body: "" })
      expect(article.valid?).to eq false
      expect(article.errors[:body]).to include("can't be blank")
    end

    it "when smaller than 10" do
      body = "a" * 9
      article.update({ body: body })
      expect(article.valid?).to eq false
      expect(article.errors[:body]).to include("is too short (minimum is 10 characters)")
    end
  end

  describe "valid body" do
    it "when 11" do
      body = "a" * 11
      article.update({ body: body })
      expect(article.valid?).to eq true
    end
  end
end
