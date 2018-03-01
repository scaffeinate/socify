class Inventory < ApplicationRecord
include Shared::Callbacks
 belongs_to :user
 counter_culture :user
 acts_as_votable
  acts_as_commentable

  



end
