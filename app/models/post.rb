class Post < ActiveRecord::Base
  belongs_to :user
  counter_culture :user
  acts_as_votable
  acts_as_commentable

  include PublicActivity::Model
  tracked only: [:create], owner: Proc.new{ |controller, model| controller.current_user }
  validates_presence_of :content

  default_scope -> { order('created_at DESC') }

  mount_uploader :attachment, AvatarUploader
end
