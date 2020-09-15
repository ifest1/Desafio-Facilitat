Rails.application.routes.draw do
  resources :user, :path => "users"
  resources :post, :path => "posts"
  resources :comment, :path => "comments"
  resources :session, :path => "sessions"
end
