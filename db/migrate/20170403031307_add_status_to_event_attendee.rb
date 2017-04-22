class AddStatusToEventAttendee < ActiveRecord::Migration
  def change
    add_column :event_attendees, :status, :enum, default: 0, null: false
  end
end
