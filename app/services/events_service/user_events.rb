class EventsFetchService
  class UserEvents
    def self.build
      new
    end

    def call(user_id)
      @events = Event.select("events.*").joins("INNER JOIN follows ON events.user_id = follows.followable_id").where("follows.follower_id = #{user_id} AND follows.followable_type ='User'")
    end
  end
end
