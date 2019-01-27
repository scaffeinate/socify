class AddCommentHtmlToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :comment_html, :text
  end
end
