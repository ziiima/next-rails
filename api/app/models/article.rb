class Article < ApplicationRecord
    attribute :title, :string
    attribute :body, :text

    validates :title, presence: true, length: { in: 1..255 }
    validates :body, presence: true,  length: { minimum: 10 }
end
