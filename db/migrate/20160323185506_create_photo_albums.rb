class CreatePhotoAlbums < ActiveRecord::Migration
  def change
    create_table :photo_albums do |t|
      t.string :title, default: 'Album'
      t.string :front_image_url
      t.integer :images_count, default: 0, null: false
      t.references :user, index: true

      t.timestamps
    end
  end
end
