class CreateOrder < ActiveRecord::Migration[7.2]
  def change
    create_table :orders, primary_key: [:shop_id, :id] do |t|
      t.integer :shop_id
      t.integer :id

      t.timestamps
    end
  end
end
