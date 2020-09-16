class SessionController < ApplicationController
    def create
        if @user = User.authenticate(params[:email], params[:password])
            render json: @user.as_json(only: [:name, :authentication_token, :avatar]), status: :ok
        else
            render json: {status: :unauthorized}
        end
    end
end
