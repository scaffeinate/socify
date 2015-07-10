module UsersHelper
  def options_for_seasons
    [['Male', 'male'], ['Female', 'female']]
  end

  def age(dob)
    now = Time.now.utc.to_date
    now.year - dob.year - (dob.to_date.change(:year => now.year) > now ? 1 : 0)
  end
end
