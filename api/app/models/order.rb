class Order < ApplicationRecord
    has_many :book_orders, class_name: "Book::Order"
    has_many :books, through: :book_orders
end
