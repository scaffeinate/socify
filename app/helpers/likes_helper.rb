# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

module LikesHelper
  def find_like(likeable)
    likeable.get_likes.where(user: current_user)
  end
end
