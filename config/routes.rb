Rails.application.routes.draw do

  resources :urls, only: %i[index create]
  get '/:slug' => "urls#show"
  put '/:slug' => "urls#update"

  root "home#index"
  get '*path', to: 'home#index', via: :all

end
