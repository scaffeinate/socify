class CreateEventAttendees < ActiveRecord::Migration
  def change
    create_table :event_attendees do |t|
      t.references :event, index: true, null: false
      t.references :user, index: true, null: false

      t.timestamps
    end
  end
end
