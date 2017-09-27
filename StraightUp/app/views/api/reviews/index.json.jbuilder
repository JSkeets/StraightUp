
@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :drink_id, :location_id, :user_id, :rating, :body, :id
    json.created_at time_ago_in_words(review.created_at)
  end
end
