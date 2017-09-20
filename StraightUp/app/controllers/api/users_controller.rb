class Api::UsersController < ApplicationController

  def create

    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render json: @user
    else
      p @user.errors.full_messages

      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render json: @user
    else
      render json: ["INVALID"], status: 422
    end
  end

  def index
    @users = User.all
    render json: @users
  end

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
