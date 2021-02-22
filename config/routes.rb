Rails.application.routes.draw do
  root "home#index"
  get '*path', to: 'home#index', via: :all

  resources :urls, only: %i[index create]

end
