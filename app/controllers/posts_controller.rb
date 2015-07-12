class PostsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_post, only: [:show, :update, :destroy]

  def show
    @comments = @post.comments.all
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      redirect_to root_path
    else
      redirect_to root_path, notice: @post.errors.full_messages.first
    end
  end

  def update
    @post.update(post_params)
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.js
      format.html { redirect_to root_path }
    end
  end

  private
  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:content, :attachment)
  end
end
