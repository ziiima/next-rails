class Comment < ApplicationRecord
  include Visible

  belongs_to :article
  attribute :commenter, :string
  attribute :body, :text
  attribute :status, :string

  validates :commenter, presence: true, length: { maximum: 255 }
  validates :body, presence: true
end
