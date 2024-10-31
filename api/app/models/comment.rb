class Comment < ApplicationRecord
  belongs_to :article
  attribute :commenter, :string
  attribute :body, :text

  validates :commenter, presence: true, length: { maximum: 255 }
  validates :body, presence: true
end
