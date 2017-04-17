class EventsFetchService
  class FriendsEvents
    def self.build
      new
    end

    def call(params)
      user_id = params[:user_id]
      friends_events = Event.select("events.*").joins("INNER JOIN follows ON events.user_id = follows.followable_id").where("follows.follower_id = #{user_id} AND follows.followable_type ='User'")
      return friends_events
    end
  end
end
