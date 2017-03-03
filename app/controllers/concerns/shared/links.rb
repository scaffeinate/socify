# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

module Shared::Links
  extend ActiveSupport::Concern
  def link_urls(content)
    Twitter::Autolink.auto_link(content, target_blank: true)
  end
end
