json.partial! "api/drinks/drink", drink: @drink
json.reviews @drink.reviews, partial: 'api/reviews/review', as: :review
