class PhotoAlbum < ActiveRecord::Base
  belongs_to :user
  has_many :photos, dependent: :destroy

  validates_presence_of :title
  validates_presence_of :user

  self.per_page = 10

  default_scope -> { order('created_at DESC') }

  extend FriendlyId
  friendly_id :title, use: [:slugged, :finders]
end
