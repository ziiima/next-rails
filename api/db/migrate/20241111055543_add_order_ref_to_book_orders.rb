class AddOrderRefToBookOrders < ActiveRecord::Migration[7.2]
  def change
    add_column :book_orders, :order_shop_id, :int, if_not_exists: true, null: false
    add_column :book_orders, :order_id, :int, if_not_exists: true, null: false
    add_foreign_key :book_orders, :orders, primary_key: [:shop_id, :id], if_not_exists: true, on_delete: :cascade
  end
end
