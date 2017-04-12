class EventsFetchService
  EXPLORE = 0
  INVITED = 1
  USER = 2
  def self.build
    new
  end

  def call(params)
    mode = params[:mode]
    if mode == EXPLORE
      return ExploreEvents.build.call(params)
    elsif mode == INVITED
      return InvitedEvents.build.call(params)
    elsif mode == USER
      return UserEvents.build.call(params)
    end
  end
end
