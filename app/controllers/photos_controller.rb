class PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)

    @photo_album = PhotoAlbum.find(params[:photo_album_id])

    respond_to do |format|
      if @photo.save
        if @photo_album.photos_count == 0
          @photo_album.front_image_url = @photo.file.url
          @photo_album.save
        end
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
