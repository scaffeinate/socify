class AddFieldsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :hometown, :string
    add_column :users, :works_at, :string
    rename_column :users, :about, :bio
  end
end
