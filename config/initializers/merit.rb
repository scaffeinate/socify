# Use this hook to configure merit parameters
Merit.setup do |config|
  Merit::Badge.create!(
    id: 1,
    name: "Jr.Critics",
    description: "Over 5 comments",
    custom_fields: { color: '#C9AE5D', icon: 'icon-star-circled' }
  )
  Merit::Badge.create!(
    id: 2,
    name: "Sr.Critic",
    description: "Over 50 comments",
    custom_fields: { color: '#FFD700', icon: 'icon-crown' }
  )

  Merit::Badge.create!(
    id: 3,
    name: "Story Teller",
    description: "Over 5 posts!",
    custom_fields: { color: '#C0C0C0', icon: 'icon-certificate' }
  )
  Merit::Badge.create!(
    id: 4,
    name: "First story ",
    description: "created first story",
    custom_fields: { color: '#C9AE5D', icon: 'icon-star-1' }
  )

  Merit::Badge.create!(
    id: 5,
    name: "Scholar",
    description: "Recieved over 2 likes on your post!",
    custom_fields: { color: '#FFD700', icon: 'icon-certificate' }
  )
  Merit::Badge.create!(
    id: 6,
    name: "Necromancer",
    description: "followed 7 people",
    custom_fields: { color: '#FFD700', icon: 'icon-minefield' }
  )
end
  # Check rules on each request or in background
  # config.checks_on_each_request = true

  # Define ORM. Could be :active_record (default) and :mongoid
  # config.orm = :active_record

  # Add application observers to get notifications when reputation changes.
  # config.add_observer 'MyObserverClassName'

  # Define :user_model_name. This model will be used to grand badge if no
  # `:to` option is given. Default is 'User'.
  # config.user_model_name = 'User'

  # Define :current_user_method. Similar to previous option. It will be used
  # to retrieve :user_model_name object if no `:to` option is given. Default
  # is "current_#{user_model_name.downcase}".
  # config.current_user_method = 'current_user'


# Create application badges (uses https://github.com/norman/ambry)
# badge_id = 0
# [{
#   id: (badge_id = badge_id+1),
#   name: 'just-registered'
# }, {
#   id: (badge_id = badge_id+1),
#   name: 'best-unicorn',
#   custom_fields: { category: 'fantasy' }
# }].each do |attrs|
#   Merit::Badge.create! attrs
# end
