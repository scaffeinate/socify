class Attachment < ActiveRecord::Base
  belongs_to :attachable, polymorphic: true
  validates_presence_of :commentable

  mount_uploader :file_name, AttachmentUploader
end
