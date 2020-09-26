class SessionController < ApplicationController
    def create
        user = User.find_by_email(params[:email])
        if user && user.authenticate(params[:password])
            authentication_token = encode_token({user_id: user.id})
            render json: {authentication_token: authentication_token}, status: :ok
        else
            render json: {status: :unauthorized}
        end
    end
end
