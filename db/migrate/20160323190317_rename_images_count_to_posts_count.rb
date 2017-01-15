class RenameImagesCountToPostsCount < ActiveRecord::Migration
  def change
    rename_column :photo_albums, :images_count, :photos_count
  end
end
