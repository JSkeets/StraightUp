
@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :drink_id, :location_id, :user_id, :rating, :body, :id
  end
end
