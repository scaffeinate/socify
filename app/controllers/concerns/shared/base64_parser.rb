# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

module Shared::Base64Parser
  extend ActiveSupport::Concern
  def parse_base_64(_base64)
    unless _base64.blank?
      filename = 'upload-image'
      in_content_type, encoding, string = _base64.split(/[:;,]/)[1..3]

      tempfile = Tempfile.new(filename)
      tempfile.binmode
      tempfile.write Base64.decode64(string)
      tempfile.rewind

      # for security we want the actual content type, not just what was passed in
      content_type = `file --mime -b #{tempfile.path}`.split(';')[0]

      # we will also add the extension ourselves based on the above
      # if it's not gif/jpeg/png, it will fail the validation in the upload model
      extension = content_type.match(/gif|jpeg|png/).to_s
      filename += ".#{extension}" if extension

      { tempfile: tempfile, extension: extension, filename: filename }
    end
  end
end
