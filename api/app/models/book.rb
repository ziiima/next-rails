class Book < ApplicationRecord
  has_many :book_orders, class_name: "Book::Order"
  has_many :orders, through: :book_orders
end
