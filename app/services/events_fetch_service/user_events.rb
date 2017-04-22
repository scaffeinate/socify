class EventsFetchService
  class UserEvents
    def self.build
      new
    end

    def call(params)
      user_id = params[:user_id]
      events = User.find_by(id: user_id).events.paginate(page: params[:page])
      return events
    end
  end
end
