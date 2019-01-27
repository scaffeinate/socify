class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :content, null: false
      t.references :user, index: true
      t.string :attachment

      t.timestamps
    end
  end
end
