class AddCommentHtmlToComments < ActiveRecord::Migration
  def change
    add_column :comments, :comment_html, :text
  end
end
