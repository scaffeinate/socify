module CommentsHelper
  def get_recent
    @comments = Comment.order('created_at DESC').limit(5)
    @comments
  end
end
