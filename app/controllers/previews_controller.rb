# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.
class PreviewsController < ApplicationController
  def index
    @preview = Onebox.preview(params[:url])
    render json: { html: @preview.to_s }, status: 200
  end
end
