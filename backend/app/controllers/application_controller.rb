class ApplicationController < ActionController::API

  def is_logged_in
    if token = get_token
      @user = User.where({authentication_token: token}).first
      @user
    else
      nil
    end
  end

  def random_image
    'https://picsum.photos/200/300'
  end

  def get_token
    if token = request.headers["Authorization"]
      if token.split(' ').length == 2
        token = token.split(' ')[1]
      end
    token
    end
  end
end
