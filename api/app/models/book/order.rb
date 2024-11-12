class Book::Order < ApplicationRecord
    belongs_to :book
    belongs_to :order, class_name: "::Order", foreign_key: [ :order_id, :order_shop_id ]
end
