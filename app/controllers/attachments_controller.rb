class AttachmentsController < ApplicationController
  def create
    index = 0
    @attachments = Attachment.new do |attachment|
      attachment.file_name = params[:files][index]
      index += 1
    end
    if @attachments.save
      render json: @attachments, status: 200
    else
      render json: { error: @attachments.errors.full_messages.first }, status: :unprocessible_entity
    end
  end
end
