# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

class LikesController < ApplicationController
  before_action :find_likeable
  before_action :authenticate_user!
  respond_to :js

  def create
    @likeable.liked_by current_user
    @likeable.create_activity(:like, owner: current_user)
  end

  def destroy
    @likeable.disliked_by current_user
    activity = PublicActivity::Activity.find_by_trackable_id_and_key(@likeable.id, "#{@likeable_type.downcase}.like")
    activity.destroy if activity.present?
  end

  private
  def find_likeable
    @likeable_type = params[:likeable_type].classify
    @likeable = @likeable_type.constantize.find(params[:likeable_id])
  end
end
