class Attachment < ActiveRecord::Base
  belongs_to :attachable, polymorphic: true
  mount_uploader :file_name, AttachmentUploader
end
