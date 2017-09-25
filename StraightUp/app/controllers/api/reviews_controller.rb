class Api::ReviewsController < ApplicationController

  def index
    if params[:user_id] === nil && params[:drink_id] === nil && params[:location_id] === nil
      @reviews = Review.all
    elsif params[:user_id] != nil
      @reviews = Review.where(user_id: params[:user_id])
    elsif params[:drink_id] != nil
      @reviews = Review.where(drink_id: params[:drink_id])
    elsif params[:location_id] != nil
      @reviews = Review.where(location_id: params[:location_id])
    end
    render  "/api/reviews/index"
  end

  def show
    @review = Review.find(params[:id])
    if @review
      render  "/api/reviews/show"
    else
      render json: ["Review isn't created yet"], status: 422
    end
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render  "/api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])
      if @review.update_attributes(review_params)
        render json: @review
      else
        render json: @review.errors.full_messages, status:422
      end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render  "/api/reviews/index"
  end

  def review_params
    params.require(:review).permit(:rating,:body,:drink_id,:location_id,:user_id)
  end
end
