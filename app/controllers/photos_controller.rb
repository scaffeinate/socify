class PhotosController < ApplicationController
  respond_to :json

  def create
    @photo = Photo.new(photo_params)
    @photo.save
  end

  private

  def photo_params
    params.require(:photo).permit(:file, :photo_album_id)
  end
end
