class CommentsController < ApplicationController

  before_action :authenticate_user!
  before_action :find_commentable

  respond_to :js

  def create
    @comment = @commentable.comments.create do |comment|
      comment.comment = params[:comment_text]
      comment.user = current_user
    end
    @comment.save
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment_id = params[:id]
    @comment.destroy
  end

  private
  def find_commentable
    params.each do |name, value|
      @commentable = $1.classify.constantize.find(value) if name =~ /(.+)_id$/
    end
  end
end
