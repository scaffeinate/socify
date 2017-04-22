class AddLocationAndLatlngToEvents < ActiveRecord::Migration
  def change
    rename_column :events, :where, :location
    add_column :events, :latlng, :string, default: {}
  end
end
