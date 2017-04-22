# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.
include Shared::AutoLink

class CommentsController < ApplicationController
  before_action :authenticate_user!, except: :index
  respond_to :js, :json

  def index
    @comments = Comment.where('commentable_type = ? AND commentable_id = ?', params[:commentable_type], params[:commentable_id]).limit(params[:limit])
    render json: @comments, each_serializer: CommentSerializer, status: :ok
  end

  def create
    @comment = Comment.new do |c|
      c.commentable_type = params[:commentable_type]
      c.commentable_id = params[:commentable_id]
      c.comment = link_urls(params[:comment_text])
      c.user = current_user
    end
    if @comment.save
      render json: @comment, status: :ok
    else
      render json: { error: @comment.errors.full_messages.first }, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    if @comment.destroy
      render json: @comment, status: :ok
    else
      render json: { error: @comment.errors.full_messages.first }, status: :unprocessable_entity
    end
  end
end
