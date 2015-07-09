class Event < ActiveRecord::Base
  belongs_to :user
  acts_as_votable
  acts_as_commentable

  include PublicActivity::Model
  tracked only: [:create], owner: Proc.new{ |controller, model| controller.current_user }
  validates_presence_of :name
end
