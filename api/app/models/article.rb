class Article < ApplicationRecord
    include Visible

    has_many :comments, -> { order(created_at: :desc) }, dependent: :destroy
    attribute :title, :string
    attribute :body, :text
    attribute :status, :string

    validates :title, presence: true, length: { in: 1..255 }
    validates :body, presence: true,  length: { minimum: 10 }
end
