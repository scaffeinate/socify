class AddProfileCompleteToUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_complete, :boolean, null: false, default: false
  end
end
