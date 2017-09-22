export const fetchAllUsers = () => (
  $.ajax({
    method: "GET",
    url: "/api/users"
  })
);

export const createUser = (user) => (
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: {user}
  })
);

export const fetchUser = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  })
);

export const updateUserReview = (review) => (
  $.ajax({
    method: "PATCH",
    url: `/api/users/${review.user_id}/${review.id}`,
    data: {review}
  })
);

export const destroyUserReview = (review) => (
  $.ajax({
    method: "DELETE",
    url: `/api/users/${review.user_id}/${review.id}`
  })
);

export const fetchUserReviews = (review) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${review.user_id}/reviews/${review.id}`
  })
);
