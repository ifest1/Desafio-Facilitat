class ApplicationController < ActionController::API
  def authorized
    if token = request.headers["Authorization"]
      token = token.split(' ')[1]
      @user = User.find_by_authentication_token(token)
      @user
    else
      nil
    end
  end
end
