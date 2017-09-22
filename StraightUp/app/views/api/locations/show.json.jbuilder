json.partial! "api/locations/location", location: @location
json.reviews @location.reviews, partial: 'api/reviews/review', as: :review
