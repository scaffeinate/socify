module HomeHelper
  def relative_time(created_at)
    time_ago_in_words(created_at)
  end
end
