class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :created_at
  belongs_to :user
end
