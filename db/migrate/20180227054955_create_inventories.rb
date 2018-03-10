class CreateInventories < ActiveRecord::Migration[5.0]
  def change
    create_table :inventories do |t|
      t.integer :product_id
      t.string :item
      t.string :condition
      t.integer :price
      t.integer :owner_id
      t.integer :borrower_id
      t.string :status
      t.string :borrowed_date
      t.date :return_date

      t.timestamps
    end
  end
end
