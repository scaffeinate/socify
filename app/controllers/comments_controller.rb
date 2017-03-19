# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.
include Shared::AutoLink

class CommentsController < ApplicationController
  before_action :authenticate_user!
  respond_to :js, :json

  def index
    @comments = Comment.where('commentable_type = ? AND commentable_id = ?', params[:commentable_type], params[:commentable_id]).limit(params[:limit])
    render json: @comments, each_serializer: CommentSerializer
  end

  def create
    @comment = Comment.new do |comment|
      comment.commentable_type = params[:commentable_type]
      comment.commentable_id = params[:commentable_id]
      comment.comment = link_urls(params[:comment_text])
      comment.user = current_user
    end
    @comment.save
    render json: @comment
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.destroy
    render json: @comment
  end
end
