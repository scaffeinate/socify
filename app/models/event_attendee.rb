class EventAttendee < ActiveRecord::Base
  belongs_to :event
  belongs_to :user

  enum status: {
    not_attending: 0,
    interested: 1,
    attending: 2
  }
end
