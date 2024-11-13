class AddPriceToPoduct < ActiveRecord::Migration[7.2]
  def change
    add_column :products, :price, :decimal
    add_index :products, :part_number
  end
end
