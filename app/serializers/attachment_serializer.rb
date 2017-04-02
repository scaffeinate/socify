class AttachmentSerializer < ActiveModel::Serializer
  attributes :id, :attachable_type, :attachable_id, :url, :thumb_url, :cover_url

  def url
    object.file_name.url
  end

  def thumb_url
    object.file_name.thumb.url
  end

  def cover_url
    object.file_name.cover.url
  end
end
