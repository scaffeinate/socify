class HomeController < ApplicationController
  def index
    @post = Post.new
    @activities = PublicActivity::Activity.all.order('created_at DESC')
  end

  def find_friends
    @users = User.all
  end
end
