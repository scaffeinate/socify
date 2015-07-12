class UsersController < ApplicationController

  before_action :authenticate_user!
  before_action :set_user

  respond_to :html, :js

  def show
    @activities = PublicActivity::Activity.where(owner: @user).paginate(page: params[:page], per_page: 10).order(created_at: :desc)
  end

  def edit
  end

  def update
    if @user.update(user_params)
      redirect_to user_path(@user)
    else
      render :edit
    end
  end

  def deactivate
  end

  def friends
    @friends = @user.following_users.paginate(page: params[:page])
  end

  def followers
    @followers = @user.user_followers.paginate(page: params[:page])
  end

  private
  def user_params
    params.require(:user).permit(:name, :about, :avatar, :cover,
                                 :sex, :dob, :location, :phone_number)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
