class Api::DrinksController < ApplicationController

  def index
    @drinks = Drink.all
    render "api/drinks/index"
  end

  def show
    @drink = Drink.find(params[:id])
    if @drink
      render "/api/drinks/show"
    else
      render json: ["Drink isn't created yet"], status: 422
    end
  end

  def create
    @drink = Drink.new(drink_params)
    if @drink.save
      render "/api/drinks/show"
    else
      render json: @drink.errors.full_messages, status: 422
    end
  end

  def drink_params
    params.require(:drink).permit(:name,:image_url)
  end
end
