Rails.application.routes.draw do
  devise_for :users
  match :about, to: 'home#about', as: :about, via: :get
  unauthenticated :user do
    root 'home#front'
  end
  authenticated :user do
    root to: 'home#index', as: 'home'
    namespace :api do
      namespace :v1 do
        resources :users do
          collection do
            get :current
          end
        end
      end
    end
    get '*path' => redirect('/')
  end
end
