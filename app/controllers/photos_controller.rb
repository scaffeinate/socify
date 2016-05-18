class PhotosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_photo, except: :create
  respond_to :js

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

  def update
    @photo.update(photo_params)
  end

  def destroy
    @photo_album = @photo.photo_album
    @photo.destroy
    @photo_album.update!(front_image_url: nil) if @photo_album.photos_count == 1
  end

  private

  def photo_params
    params.permit(:id, :file, :title, :photo_album_id)
  end

  def set_photo
    @photo = Photo.find(params[:id])
  end
end
