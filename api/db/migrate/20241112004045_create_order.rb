class CreateOrder < ActiveRecord::Migration[7.2]
  def change
    create_table :orders, primary_key: [ :id, :shop_id ] do |t|
      t.integer :shop_id
      t.integer :id
      t.string :status

      t.timestamps
    end
  end
end
