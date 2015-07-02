class PostsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_post, only: [:show, :update, :destroy]

  respond_to :html

  def show
    respond_with(@post)
  end

  def create
    @post = Post.new(post_params) do |post|
      post.user = current_user
    end
    @post.save
    respond_with(@post)
  end

  def update
    @post.update(post_params)
    respond_with(@post)
  end

  def destroy
    @post.destroy
    respond_with(@post)
  end

  private
  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:content, :attachment)
  end
end
