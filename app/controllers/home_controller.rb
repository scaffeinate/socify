class HomeController < ApplicationController

  respond_to :html, :js

  def index
    @post = Post.new
    if user_signed_in?
      @friends = current_user.all_following
      @activities = PublicActivity::Activity.where('owner_id = (?) OR owner_id in (?)', current_user, @friends).paginate(page: params[:page], per_page: 10).order(created_at: :desc)
    else
      @activities = PublicActivity::Activity.paginate(page: params[:page], per_page: 10).order(created_at: :desc)
    end
  end

  def find_friends
    @users = User.all
  end
end
