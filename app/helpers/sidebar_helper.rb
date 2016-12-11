# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

module SidebarHelper
  def is_active(controller, action)
    'active' if params[:controller] == controller && params[:action] == action
  end
end
