class CreatePostAuthors < ActiveRecord::Migration[7.2]
  def change
    create_table :post_authors do |t|
      t.timestamps
    end
  end
end
