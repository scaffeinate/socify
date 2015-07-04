class UsersController < ApplicationController

  before_action :authenticate_user!
  before_action :set_user

  def show
    @activities = PublicActivity::Activity.where(owner: @user)
  end

  def edit
  end

  def update
    @user.update(user_params)
    if @user.save
      redirect_to user_path(@user)
    else
      render :edit
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :about, :avatar, :cover)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
