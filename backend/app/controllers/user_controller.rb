class UserController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def show
    render json: @user.as_json(only: [:name, :avatar_path]), status: :ok
  end

  def create
    @user = User.new({
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation],
      avatar_path: random_image(),
      phone: params[:phone]
    })

    if @user.save
      render json: {status: :created}
    else
      render json: {status: :unauthorized}
    end
  end

  def update
    if @user.update(user_params)
      render json: @user, status: :ok
    else
      head(:unauthorized)
    end
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :email, :password, :phone)
    end
end
