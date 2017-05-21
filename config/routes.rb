Rails.application.routes.draw do
  devise_for :users
  match :about, to: 'home#about', as: :about, via: :get
  unauthenticated :user do
    root 'home#front'
  end
  authenticated :user do
    root to: 'home#index', as: 'home'
    get '*path' => redirect('/')
  end
end
