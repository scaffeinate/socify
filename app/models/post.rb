class Post < ActiveRecord::Base
  belongs_to :user
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller.current_user }
end
