Rails.application.routes.draw do

  resources :urls, only: %i[index create]
  get '/:slug' => "urls#show"

  root "home#index"
  get '*path', to: 'home#index', via: :all

end
