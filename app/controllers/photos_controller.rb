class PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo_album = PhotoAlbum.find(params[:photo_album_id])

    respond_to do |format|
      if @photo.save
        @photo_album.update!(front_image_url: @photo.file.thumb.url) if @photo_album.front_image_url.nil?
        format.json { render json: @photo }
      else
        format.json do
          render json: {
            error: @photo.errors.full_messages.first
          }, status: :unprocessable_entity
        end
      end
    end
  end

  private

  def photo_params
    params.permit(:file, :photo_album_id)
  end
end
