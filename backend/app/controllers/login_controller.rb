class LoginController < ApplicationController
    def create
        if user = User.authenticate(params[:email], params[:password])
          session[:current_user_id] = user.id
          redirect_to '/post'
        end
    end
    def destroy
        session.delete(:current_user_id)
        @_current_user_id = nil
        redirect_to '/post'
    end
end
