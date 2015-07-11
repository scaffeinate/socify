class HomeController < ApplicationController

  respond_to :html, :js

  def index
    @post = Post.new
    @user = current_user
    @friends = @user.all_following
    @activities = PublicActivity::Activity.where(owner_id: @friends.unshift(@user))
    .order(created_at: :desc)
    .paginate(page: params[:page], per_page: 10)
  end

  def front
    @activities = PublicActivity::Activity.order(created_at: :desc).paginate(page: params[:page], per_page: 10)
  end

  def find_friends
    @friends = current_user.all_following
    @users =  User.where.not(id: @friends.unshift(current_user)).paginate(page: params[:page])
  end
end
