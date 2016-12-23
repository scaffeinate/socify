# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

class HomeController < ApplicationController
  before_action :set_user, except: :front
  before_action :fetch_photos, only: :index
  respond_to :html, :js

  include Shared::Photos

  def index
    @post = Post.new
    @friends = @user.all_following
    @mentionable = @user.following_users.to_json(only: [:id, :name])
    @activities = PublicActivity::Activity.where(owner_id: @friends).order(created_at: :desc)
                                          .paginate(page: params[:page], per_page: 10)
  end

  def front
    @activities = PublicActivity::Activity.order(created_at: :desc).paginate(page: params[:page], per_page: 10)
  end

  def find_friends
    @friends = @user.all_following
    @users = User.where.not(id: @friends.unshift(@user)).paginate(page: params[:page])
  end
end
