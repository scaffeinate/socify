class RenameUrlToFile < ActiveRecord::Migration
  def change
    rename_column :photos, :url, :file
  end
end
