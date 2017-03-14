class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :created_at, :belongs_to_current_user
  belongs_to :user

  def belongs_to_current_user
    object.user == current_user
  end
end
