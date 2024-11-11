class AddBooksRefToBookOrders < ActiveRecord::Migration[7.2]
  def change
    add_reference :book_orders, :book, null: false, foreign_key: true
  end
end
