# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

class EventsController < ApplicationController
  before_action :set_user
  before_action :authenticate_user!
  before_action :set_event, only: [:edit, :update, :show, :destroy]

  def new
    @event = Event.new
  end

  def create
    @event = current_user.events.new(event_params)
    if @event.save
      redirect_to root_path
    else
      render 'new', notice: @event.errors.full_messages.first
    end
  end

  def edit
    @event.event_datetime = @event.event_datetime.strftime("%Y/%m/%d %H:%M")
  end

  def show
    @comments = @event.comments
  end

  def update
    @event.update(event_params)
    redirect_to @event
  end

  def destroy
    @event.destroy
    respond_to do |format|
      format.js
      format.html { redirect_to root_path }
    end
  end

  def calendar
    if request.xhr?
      friend_events = Event.select("events.*").joins("INNER JOIN follows ON events.user_id = follows.followable_id").where("follows.follower_id = #{current_user.id} AND follows.followable_type ='User'")
      current_user_events = current_user.events
      @events = Event.from("(#{friend_events.to_sql} UNION #{current_user_events.to_sql}) as events").where("events.event_datetime BETWEEN '#{params[:start]}' AND '#{params[:end]}'")
    end
    respond_to do |format|
      format.html
      format.json { render :json => @events, each_serializer: EventCalendarSerializer }
    end
  end

  private
  def event_params
    params.require(:event).permit(:name, :event_datetime)
  end

  def set_event
    @event = Event.find_by(id: params[:id])
    render_404 and return unless @event && User.find_by(id: @event.user_id)
  end

  def set_user
    @user = current_user
  end
end
