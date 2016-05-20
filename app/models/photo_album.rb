class PhotoAlbum < ActiveRecord::Base
  belongs_to :user
  has_many :photos, dependent: :destroy
  acts_as_votable
  acts_as_commentable

  validates_presence_of :title
  validates_presence_of :user

  include Shared::Callbacks

  include PublicActivity::Model
  tracked only: [:create, :like], owner: proc { |_controller, model| model.user }

  default_scope -> { order('created_at DESC') }

  self.per_page = 10

  extend FriendlyId
  friendly_id :title, use: [:slugged, :finders]
end
