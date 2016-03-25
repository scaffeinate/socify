class PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    respond_to do |format|
      if @photo.save
        format.json { render json: @photo }
      else
        format.json { render json: @photo.errors.full_messages.first }
      end
    end
  end

  private

  def photo_params
    params.permit(:file, :photo_album_id)
  end
end
