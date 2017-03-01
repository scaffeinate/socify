class DropContentHtmlAddPreviewHtmlPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :content_html
    add_column :posts, :preview_html, :text, null: false, default: ''
  end
end
