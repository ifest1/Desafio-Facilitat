class UserController < ApplicationController
  def show
    user = User.find_by_id(params[:id])
    featured_image = user.featured_image_url
    render json: {user: user.as_json(only: [:name, :email]), featured_image: featured_image}, status: :ok
  end

  def create
    user = User.new({
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation],
      phone: params[:phone],
      featured_image: params[:featured_image]
    })
    if user.save
      render json: {status: :created}
    else
      render json: {status: :unauthorized}
    end
  end

  def update
    if user.update(user_params)
      render json: user, status: :ok
    else
      head(:unauthorized)
    end
  end

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :phone, :featured_image)
    end
end
