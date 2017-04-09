# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

class EventsController < ApplicationController
  before_action :set_user
  before_action :authenticate_user!
  before_action :set_event, only: [:show, :edit, :update, :destroy, :change_status]

  def index
    @events = Event.select("events.*").joins("INNER JOIN follows ON events.user_id = follows.followable_id AND follows.followable_type = 'User'").where("follows.follower_id = #{current_user.id} AND follows.followable_type ='User'").paginate(page: params[:page], per_page: 10)
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params.merge(user: current_user))
    if @event.save
      @event.update_attachment(params[:attachment_id])
      redirect_to root_path
    else
      render 'new', notice: @event.errors.full_messages.first
    end
  end

  def show
    @comments = @event.comments
  end

  def edit
  end

  def update
    if @event.update(event_params)
      redirect_to root_path
    else
      render 'edit', notice: @event.errors.full_messages.first
    end
  end

  def destroy
    @event.destroy
    redirect_to root_path
  end

  def change_status
    @event_attendee = EventAttendee.find_or_create_by(event: @event, user: current_user)
    if @event_attendee.update(status: event_params[:status].to_i)
      render json: {}, status: :ok
    else
      render json: { error: @event_attendee.errors.full_messages.first }, status: :unprocessable_entity
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :when, :location, :latlng, :status)
  end

  def set_event
    @event = Event.find(params[:id])
  end
end
