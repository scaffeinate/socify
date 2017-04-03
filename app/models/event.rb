# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

class Event < ActiveRecord::Base
  include Shared::Callbacks
  belongs_to :user
  acts_as_votable
  acts_as_commentable

  has_one :attachment, as: :attachable
  has_many :event_attendees
  has_many :attendees, through: :event_attendees, source: :user

  include PublicActivity::Model
  tracked only: [:create], owner: proc { |_controller, model| model.user }

  validates_presence_of :name
  validates_presence_of :when
  validates_presence_of :location
  validates_presence_of :user

  def update_attachment(attachment_id)
    update_attachment_resource(attachment_id, self.class.name.to_s, id)
  end
end
