class AddContentHtmlToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :content_html, :text
  end
end
