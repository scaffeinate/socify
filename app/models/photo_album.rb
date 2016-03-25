class PhotoAlbum < ActiveRecord::Base
  belongs_to :user
  has_many :photos

  validates_presence_of :title
  validates_presence_of :user

  extend FriendlyId
  friendly_id :title, use: [:slugged, :finders]
end
