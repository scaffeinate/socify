class PhotoAlbumsController < ApplicationController
  before_action :set_user
  before_action :authenticate_user!
  before_action :set_photo_album, only: [:show, :destroy]

  def new
    # code
  end

  private

  def photo_album_params
    params.require(:photo_album).permit(:title)
  end

  def set_photo_album
    @event = PhotoAlbum.find(params[:id])
  end

  def set_user
    @user = current_user
  end
end
