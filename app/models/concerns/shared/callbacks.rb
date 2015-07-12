module Shared::Callbacks
  extend ActiveSupport::Concern

  included do
    before_destroy :remove_activity
  end

  def remove_activity
    activity = PublicActivity::Activity.find_by_trackable_id(self.id)
    activity.destroy if activity.present?
    true
  end
end
