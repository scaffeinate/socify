class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title, null: false, default: ''
      t.string :url, null: false
      t.references :photo_album, index: true

      t.timestamps
    end
  end
end
