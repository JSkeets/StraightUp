@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :review_ids,:reviews
  end
end
