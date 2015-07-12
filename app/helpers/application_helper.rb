module ApplicationHelper
  def belongs_to_user?(resource)
    resource.user == current_user
  end
end
