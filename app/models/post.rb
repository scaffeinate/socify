# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

class Post < ActiveRecord::Base
  include Shared::Callbacks

  belongs_to :user
  counter_culture :user
  acts_as_votable
  acts_as_commentable

  include PublicActivity::Model
  tracked only: [:create], owner: proc { |_controller, model| model.user }

  default_scope -> { order('created_at DESC') }

  mount_uploader :attachment, AvatarUploader

  validate :content_or_attachment
  validates_presence_of :user

  private

  def content_or_attachment
    errors[:base] << 'Post cant be blank' if content.blank? && attachment.blank?
  end
end
