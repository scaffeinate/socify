Rails.application.routes.draw do
  resources :posts do
    collection do
      get :preview
    end
  end
  resources :comments, only: [:create, :destroy]
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  resources :users do
    member do
      get :friends
      get :followers
      get :deactivate
      get :mentionable
      get :complete_profile
      post :set_password
    end
  end

  resources :events, except: [:edit, :update]
  resources :photo_albums
  resources :photos, only: [:create, :destroy]

  authenticated :user do
    root to: 'home#index', as: 'home'
  end
  unauthenticated :user do
    root 'home#front'
  end

  post :follow, to: 'follows#create', as: :follow
  post :unfollow, to: 'follows#destroy', as: :unfollow
  post :like, to: 'likes#create', as: :like
  post :unlike, to: 'likes#destroy', as: :unlike
  get :find_friends, to: 'home#find_friends', as: :find_friends
  get :about, to: 'home#about', as: :about
  post :update_photo, to: 'photos#update', as: :update_photo
  post :update_photo_album, to: 'photo_albums#update', as: :update_photo_album

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
