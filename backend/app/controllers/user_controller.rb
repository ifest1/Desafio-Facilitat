class UserController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
    render json: @users.as_json(only: [:email, :name, :avatar]), status: :ok
  end

  def show
    render json: @user
  end

  def create

    @user = User.new({
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation],
      phone: params[:phone]
    })

    if @user.save
      head(:created)
    else
      head(:unauthorized)
    end
  end

  def update
    if @user.update(user_params)
      render json: @user, status: :ok
    else
      head(:unauthorized)
    end
  end

  def destroy
    @user.destroy
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :email, :password, :phone)
    end
end
