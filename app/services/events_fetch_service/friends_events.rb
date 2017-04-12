class EventsFetchService
  class FriendsEvents
    def self.build
      new
    end

    def call(params)
      puts params.inspect
      user_id = params[:user_id]
      friends_events = Event.select("events.*").joins("INNER JOIN follows ON events.user_id = follows.followable_id").where("follows.follower_id = #{user_id} AND follows.followable_type ='User'")
    end
  end
end
