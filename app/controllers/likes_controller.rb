class LikesController < ApplicationController

  before_action :find_likeable
  before_action :authenticate_user!

  respond_to :js

  def create
    @likeable.liked_by current_user
    respond_with(@likeable)
  end

  def destroy
    @likeable.disliked_by current_user
    respond_with(@likeable)
  end

  private
  def find_likeable
    params.each do |name, value|
      @likeable = $1.classify.constantize.find(value) if name =~ /(.+)_id$/
    end
  end
end
