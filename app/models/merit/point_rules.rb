module Merit
  class PointRules
    include Merit::PointRulesMethods

    def initialize
      score 2, on: 'comments#create', to: [:user]
      score 1, on: 'posts#upvote', to: [:user]
      score 4, on: 'posts#create', to: [:user]

      score 3, on: 'events#create', to: [:user]
      score 1, on: 'events#upvote', to: [:user]
      # score 10, :on => 'users#create' do |user|
      #   user.bio.present?
      # end
      #
      # score 15, :on => 'reviews#create', :to => [:reviewer, :reviewed]
      #
      # score 20, :on => [
      #   'comments#create',
      #   'photos#create'
      # ]
      #
      # score -10, :on => 'comments#destroy'
    end
  end
end
