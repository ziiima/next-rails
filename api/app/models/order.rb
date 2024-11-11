class Order < ApplicationRecord
    has_many :book_orders, class_name: "Book::Order"
end
