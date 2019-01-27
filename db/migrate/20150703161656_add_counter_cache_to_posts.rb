class AddCounterCacheToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :comments_count, :integer, :default => 0
    add_index  :posts, :comments_count
  end
end
