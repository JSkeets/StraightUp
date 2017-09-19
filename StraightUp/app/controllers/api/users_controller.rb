class Api::UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(username: username)
    if @user
      render json: @user
    else
      render "api/users"
    end
  end

  def index
    @users = User.all
    render json: @users
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
