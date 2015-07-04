class HomeController < ApplicationController

  respond_to :html, :js

  def index
    @post = Post.new
    @activities = PublicActivity::Activity.includes(:trackable).paginate(page: params[:page], per_page: 2).order(created_at: :desc)
  end

  def find_friends
    @users = User.all
  end
end
