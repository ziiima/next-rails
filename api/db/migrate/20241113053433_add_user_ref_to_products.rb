class AddUserRefToProducts < ActiveRecord::Migration[7.2]
  def change
    add_reference :products, :user, null: false, foreign_key: true, index: true
  end
end
