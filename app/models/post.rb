class Post < ActiveRecord::Base
  belongs_to :user
  validates_presence_of :content

  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller.current_user }
end
