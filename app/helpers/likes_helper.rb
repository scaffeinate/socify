module LikesHelper
  def find_like(likeable)
    likeable.get_likes.where(user: current_user)
  end
end
