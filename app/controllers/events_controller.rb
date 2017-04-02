# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

class EventsController < ApplicationController
  before_action :set_user
  before_action :authenticate_user!
  before_action :set_event, only: [:show, :destroy]

  def index
    @events = current_user.events.paginate(page: params[:page], per_page: 10)
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params.merge(user: current_user))
    if @event.save
      @event.update_attachment(params[:event][:attachment_id])
      redirect_to root_path
    else
      render 'new', notice: @event.errors.full_messages.first
    end
  end

  def show
    @comments = @event.comments
  end

  def destroy
    @event.destroy
    respond_to do |format|
      format.js
      format.html { redirect_to root_path }
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :when, :location, :latlng)
  end

  def set_event
    @event = Event.find(params[:id])
  end
end
