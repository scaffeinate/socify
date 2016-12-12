# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

module SidebarHelper
  def is_active?(controller, action)
    'active' if params[:controller] == controller && params[:action] == action
  end

  def is_user_page?
    params[:controller] == 'users'
  end

  def has_about_fields?(user)
    about_fields = %w(created_at dob location works_at hometown sex)
    !user.attributes.select { |_k, v| about_fields.include?(_k) && v.present? }.empty?
  end
end
