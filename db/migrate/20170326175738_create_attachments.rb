class CreateAttachments < ActiveRecord::Migration
  def change
    create_table :attachments do |t|
      t.string :file_name
      t.string :attachable_type, null: false
      t.integer :attachable_id, null: false

      t.timestamps
    end

    add_index :attachments, [:attachable_type, :attachable_id]
  end
end
