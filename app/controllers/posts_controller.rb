# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.
include Shared::AutoLink
include Shared::Base64Parser

class PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show, :edit]
  before_action :set_post, except: [:create, :preview]

  def create
    @post = current_user.posts.new(post_params)
    @post.content = link_urls(post_params[:content])
    @post.attachment = fetch_attachment(post_params[:attachment])

    if @post.save
      redirect_to root_path
    else
      redirect_to root_path, notice: @post.errors.full_messages.first
    end
  end

  def show
    @comments = @post.comments.all
  end

  def edit
  end

  def update
    params = post_params
    params[:content] = link_urls(params[:content])
    params[:attachment] = fetch_attachment(params[:attachment])
    @post.update(params)
    redirect_to @post
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.js
      format.html { redirect_to root_path }
    end
  end

  def preview
    @preview = Onebox.preview(params[:url])
    render json: { html: @preview.to_s }, status: 200
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:content, :preview_html, :attachment)
  end

  def fetch_attachment(_attachment)
    ActionDispatch::Http::UploadedFile.new(parse_base_64(_attachment)) unless _attachment.blank?
  end
end
