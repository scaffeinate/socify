class PhotoAlbumsController < ApplicationController
  before_action :set_user
  before_action :authenticate_user!
  before_action :set_photo_album, only: [:show, :destroy]

  def new
    @photo_album = PhotoAlbum.new
  end

  def create
    @photo_album = PhotoAlbum.new(photo_album_params)

    if @photo_album.save
      redirect_to @photo_album
    else
      render :new, notice: @photo_album.errors.full_messages.first
    end
  end

  def show
  end

  private

  def photo_album_params
    params.require(:photo_album).permit(:title)
  end

  def set_photo_album
    @photo_album = PhotoAlbum.find(params[:id])
  end
end
