Rails.application.routes.draw do
  resources :user, :path => "users"
  resources :post, :path => "posts"
  resources :comment, :path => "comments"
  resources :session, :path => "sessions"
  resources :like, :path => "likes"

  post 'posts/likes', to: 'like#post_likes'
  post '/posts/comments', to:'comment#get_post_comments'
end
