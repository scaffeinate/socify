Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, Rails.application.secrets.facebook_key, Rails.application.secrets.facebook_secret,
           scope: 'email,public_profile',
           info_fields: 'name,email,about,bio,gender',
           image_size: 'large'
end
