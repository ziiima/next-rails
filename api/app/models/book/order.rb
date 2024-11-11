class Book::Order < ApplicationRecord
    belongs_to :book
    belongs_to :order, foreign_key: [ :order_id, :order_shop_id ]
end
