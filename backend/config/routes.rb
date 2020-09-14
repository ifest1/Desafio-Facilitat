Rails.application.routes.draw do
  resources :user
  resources :post
  resources :comment
  resources :login
end
