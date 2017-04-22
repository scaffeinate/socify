class CreateAttachments < ActiveRecord::Migration
  def change
    create_table :attachments do |t|
      t.string :file_name
      t.string :attachable_type, default: ''
      t.integer :attachable_id, default: 0

      t.timestamps
    end

    add_index :attachments, [:attachable_type, :attachable_id]
  end
end
