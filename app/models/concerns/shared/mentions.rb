# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

module Shared::Mentions
  extend ActiveSupport::Concern

  included do
    before_validation :add_mention_links_to_content
  end
end
