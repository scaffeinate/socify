class HomeController < ApplicationController
  def index
    @post = Post.new
    @activities = PublicActivity::Activity.all
  end

  def find_friends
    @users = User.all
  end
end
