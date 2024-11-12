class CreateOrderItem < ActiveRecord::Migration[7.2]
  def change
    create_table :order_items do |t|
      t.string :title
      t.integer :order_id, null: false
      t.integer :order_shop_id, null: false
      t.foreign_key :orders, primary_key: [ :id, :shop_id ]

      t.timestamps
    end
  end
end
