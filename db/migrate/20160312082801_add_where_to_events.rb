class AddWhereToEvents < ActiveRecord::Migration
  def change
    add_column :events, :where, :string
  end
end
