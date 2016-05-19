class AddVotesCommentsCountPhotoAlbums < ActiveRecord::Migration
  def change
    add_column :photo_albums, :cached_votes_up, :integer, default: 0
    add_column :photo_albums, :comments_count, :integer, default: 0
  end
end
