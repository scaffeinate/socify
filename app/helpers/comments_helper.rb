module CommentsHelper
  def get_recent(_resource)
    @comments = _resource.comments.order('created_at DESC').limit(5)
    @comments
  end
end
