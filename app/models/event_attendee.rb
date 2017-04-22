class EventAttendee < ActiveRecord::Base
  belongs_to :event
  belongs_to :user

  enum status: {
    not_going: 0,
    interested: 1,
    going: 2
  }
end
