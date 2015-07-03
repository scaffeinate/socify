class HomeController < ApplicationController
  def index
    @post = Post.new
    @activities = PublicActivity::Activity.all
  end
end
