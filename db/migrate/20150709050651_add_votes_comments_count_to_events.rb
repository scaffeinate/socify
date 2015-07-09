class AddVotesCommentsCountToEvents < ActiveRecord::Migration
  def change
    add_column :events, :cached_votes_up, :integer, :default => 0
    add_index  :events, :cached_votes_up
    add_column :events, :comments_count, :integer, :default => 0
    add_index  :events, :comments_count
  end
end
