class Api::LocationsController < ApplicationController
  def index
    @locations = Location.all
    render "api/locations/index"
  end

  def show
    @location = Location.find(params[:id])
    if @location
      render json: @location
    else
      render json: ["Location isn't created yet"], status: 422
    end
  end

  def create
    @location = Location.new(location_params)
    if @location.save
      render json: @location
    else
      render json: @location.errors.full_messages, status: 422
    end
  end

  def location_params
    params.require(:location).permit(:name)
  end
end
