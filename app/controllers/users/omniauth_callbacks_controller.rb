class Users::OmniauthCallbacksController < ApplicationController
  def facebook
    authenticate_user(:facebook)
  end

  def google_oauth2
    authenticate_user(:google)
  end

  private

  def authenticate_user(_provider)
    auth = request.env['omniauth.auth']
    user = User.find_for_oauth(auth)
    authentication = Authentication.from_omniauth(auth, user)
    sign_in(user)
    if user.profile_complete?
      redirect_to root_path
    else
      redirect_to complete_profile_user_path(user)
    end
  end
end
