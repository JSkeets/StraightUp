json.partial! "api/locations/location", review: @review

# GET /api/reviews - returns relevant review (filtered by data/params), will be used for global feed
# GET /api/reviews/:id - returns a review for user show page
# POST /api/reviews - Create a review
# DELETE /api/reviews/:id - remove a review
# PATCH /api/reviews/:id - edit a review
# GET /api/drink/:id/reviews - returns a reviews for specific drink
# GET /api/user/:id/reviews - returns a reviews for specific user
