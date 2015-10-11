# Copyright (c) 2015, @sudharti(Sudharsanan Muralidharan)
# Socify is an Open source Social network written in Ruby on Rails This file is licensed
# under GNU GPL v2 or later. See the LICENSE.

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, omniauth_providers: [:facebook, :google_oauth2]

  acts_as_voter
  acts_as_follower
  acts_as_followable

  has_many :posts
  has_many :comments
  has_many :events
  has_many :authentications

  mount_uploader :avatar, AvatarUploader
  mount_uploader :cover, AvatarUploader

  validates_presence_of :name

  self.per_page = 10

  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]

  def self.find_for_oauth(auth)
    puts auth.inspect
    user = User.where(email: auth.info.email).first
    if user
      puts 'Hereeee'
      user.update_attribute(:remote_avatar_url, auth.info.image.gsub('http://', 'https://'))
    else
      user = User.new(name: auth.info.name, email: auth.info.email,
                      password: Devise.friendly_token[0, 20], remote_avatar_url: auth.info.image.gsub('http://', 'https://'))
      user.skip_confirmation!
      user.save
    end
    user
  end
end
