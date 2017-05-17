Rails.application.routes.draw do
  root to: 'home#base'
  get '*path' => redirect('/')
end
