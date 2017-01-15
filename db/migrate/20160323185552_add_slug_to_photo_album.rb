class AddSlugToPhotoAlbum < ActiveRecord::Migration
  def change
    add_column :photo_albums, :slug, :string
    add_index :photo_albums, :slug, unique: true
  end
end
