class CreateProducts < ActiveRecord::Migration[7.2]
  def up
    create_table :products, primary_key: [:store_id, :sku] do |t|
      t.bigint :store_id
      t.string :sku
      t.text :description

      t.timestamps
    end
  end

  def down
    drop_table :products, if_exists: true
  end
end
