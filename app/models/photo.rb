class Photo < ActiveRecord::Base
  counter_culture :photo_album
  belongs_to :photo_album

  validates_presence_of :photo_album

  mount_uploader :url, :photo_uploader
end
