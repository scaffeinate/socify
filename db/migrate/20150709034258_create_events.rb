class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :when
      t.references :user, index: true

      t.timestamps
    end
  end
end
