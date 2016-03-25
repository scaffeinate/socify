class PhotoAlbumsController < ApplicationController
  before_action :set_user
  before_action :authenticate_user!
  before_action :set_photo_album, only: [:show, :destroy]

  respond_to :json, :html

  def new
    @photo_album = PhotoAlbum.new
  end

  def create
    @photo_album = PhotoAlbum.new(photo_album_params)
    @photo_album.user = current_user

    if @photo_album.save
      render json: @photo_album
    else
      render errors: [
        error: @photo_album.errors.full_messages.first
      ]
    end
  end

  def show
    @photos = @photo_album.photos
  end

  private

  def photo_album_params
    params.require(:photo_album).permit(:title)
  end

  def set_photo_album
    @photo_album = PhotoAlbum.find(params[:id])
  end
end
