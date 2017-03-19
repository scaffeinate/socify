class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug, :avatar_url

  def avatar
    avatar_url
  end
end
