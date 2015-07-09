class EventsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_post, only: [:show, :destroy]

  respond_to :html

  def new
    @event = Event.new
  end

  def create
    @event = Event.new do |event|
      event.name = params[:event][:name]
      event.user = current_user
      event.when = params[:event][:when]
    end
    if @event.save
      redirect_to root_path
    else
      render 'new', notice: @event.errors.full_messages.first
    end
  end

  def show
  end

  def destroy
    @event.destroy
    redirect_to root_path
  end

  private
  def event_params
    params.require(:event).permit(:name, :when)
  end

  def set_event
    @event = Event.find(params[:id])
  end
end
