class SessionController < ApplicationController
    def create
        if @user = User.authenticate(params[:email], params[:password])
            render json: @user.as_json(only: [:email, :authentication_token]), status: :success
        else
            head(:unauthorized)
        end
    end
end
