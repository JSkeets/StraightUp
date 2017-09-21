Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create,:index,:show]
    resource :session, only: [:create,:destroy]
    resources :drinks, only: [:create,:index,:show]
  end
end
