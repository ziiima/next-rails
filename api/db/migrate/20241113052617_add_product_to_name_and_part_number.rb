class AddProductToNameAndPartNumber < ActiveRecord::Migration[7.2]
  def change
    add_column :products, :part_number, :string
    add_column :products, :name, :string
  end
end
