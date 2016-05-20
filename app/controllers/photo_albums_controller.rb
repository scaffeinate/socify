class PhotoAlbumsController < ApplicationController
  before_action :set_user
  before_action :authenticate_user!
  before_action :set_photo_album, only: [:show, :update, :destroy]

  respond_to :js, :html

  def index
    if params[:user_id]
      @user = User.find_by(slug: params[:user_id])
    else
      @user = current_user
    end
    @photo_albums = @user.photo_albums.paginate(page: params[:page])
  end

  def create
    @photo_album = PhotoAlbum.new(photo_album_params)
    @photo_album.user = current_user
    @photo_album.save
  end

  def show
    @photos = @photo_album.photos.paginate(page: params[:page])
  end

  def update
    @photo_album.update(photo_album_params)
  end

  def destroy
    if @photo_album.destroy
      redirect_to @photo_album
    else
      redirect_to @photo_album, notice: @photo_album.errors.full_messages.first
    end
  end

  private

  def photo_album_params
    params.require(:photo_album).permit(:title)
  end

  def set_photo_album
    @photo_album = PhotoAlbum.find(params[:id])
  end
end
