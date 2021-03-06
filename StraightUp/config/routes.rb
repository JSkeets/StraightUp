Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create,:index,:show] do
      resources :reviews, only: [:update,:destroy,:index]

    end

    resource :session, only: [:create,:destroy]

    resources :drinks, only: [:create,:index,:show] do
      resources :reviews, only: [:index]
    end

    resources :locations, only: [:create,:index,:show] do
      resources :reviews, only: [:index]
    end

    resources :reviews, only: [:create,:index,:show]
  end

end
