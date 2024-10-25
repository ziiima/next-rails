class Blog < ApplicationRecord
    attribute :title, :string
    validates :title, length: { in: 1..255 }
end
