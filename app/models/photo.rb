class Photo < ActiveRecord::Base
  counter_culture :photo_album
  belongs_to :photo_album

  validates_presence_of :photo_album

  self.per_page = 10

  scope :latest, -> (user = nil, limit = 10) do
    where(photo_album_id: user.photo_albums.map(&:id)).order('created_at desc').limit(limit)
  end

  mount_uploader :file, PhotoUploader
end
