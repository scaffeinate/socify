class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :when, :location, :latlng, :attachment_url

  def attachment_url
    object.attachment.file_name.cover_url
  end
end
