class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render json: @reviews
  end

  def show
    @review = Review.find(params[:id])
    if @review
      render json: @review
    else
      render json: ["Review isn't created yet"], status: 422
    end
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @reviews
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
    render json: @reviews 
  end

  def review_params
    params.require(:review).permit(:rating,:body,:drink_id,:location_id,:user_id)
  end
end
