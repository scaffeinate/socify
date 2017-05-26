class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :slug, :bio, :cover,
            :avatar, :location, :dob, :created_at, :sex,
            :phone_number, :posts_count, :first_name, :last_name, :hometown, :works_at,
            :photo_albums_count
  def created_at
    object.created_at.iso8601
  end

  def avatar
    object.avatar_url
  end

  def cover
    object.cover_url
  end
end
