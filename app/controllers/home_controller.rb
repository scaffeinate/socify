class HomeController < ApplicationController

  respond_to :html, :js

  def index
    @post = Post.new
    @friends = current_user.all_following
    @activities = PublicActivity::Activity.where(owner_id: @friends.unshift(current_user))
    .order(created_at: :desc)
    .paginate(page: params[:page], per_page: 3)
  end

  def front
    @activities = PublicActivity::Activity.order(created_at: :desc).paginate(page: params[:page], per_page: 4)
  end

  def find_friends
    @friends = current_user.all_following
    @users =  User.where.not(id: @friends.unshift(current_user)).paginate(page: params[:page])
  end
end
