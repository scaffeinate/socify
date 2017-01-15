class AddPhotoAlbumsCountToUsers < ActiveRecord::Migration
  def change
    add_column :users, :photo_albums_count, :integer, null: false, default: 0
  end
end
