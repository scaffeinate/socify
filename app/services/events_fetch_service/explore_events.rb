class EventsFetchService
  class ExploreEvents
    def self.build
      new
    end

    def call(params)
      friends_events = FriendsEvents.build.call(params)
      friends_attending_events = FriendsAttendingEvents.build.call(params)

      explore_events = Event.from("(#{friends_events.to_sql} UNION #{friends_attending_events.to_sql}) as events").latest.paginate(page: params[:page])

      return explore_events
    end
  end
end
