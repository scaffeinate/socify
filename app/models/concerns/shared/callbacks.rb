# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

module Shared::Callbacks
  extend ActiveSupport::Concern

  included do
    before_destroy :remove_activity
    before_destroy :remove_likes
  end

  def remove_activity
    activity = PublicActivity::Activity.find_by(trackable_id: id, trackable_type: self.class.to_s, key: "#{self.class.name.underscore}.create")
    activity.destroy if activity.present?
    true
  end

  def remove_likes
    activity = PublicActivity::Activity.find_by(trackable_id: id, trackable_type: self.class.to_s, key: "#{self.class.name.underscore}.like")
    activity.destroy if activity.present?
  end
end
