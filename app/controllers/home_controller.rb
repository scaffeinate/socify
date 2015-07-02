class HomeController < ApplicationController
  def index
    @activities = PublicActivity::Activity.all
  end
end
