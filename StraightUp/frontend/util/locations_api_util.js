export const fetchLocationReviews = (review) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${review.location_id}/reviews/${review.id}`
  })
);

export const fetchLocations = () => (
  $.ajax({
    method: "GET",
    url: "api/locations"
  })
);

export const fetchLocation = (id) => (
  $.ajax({
    method: "GET",
    url: `api/locations/${id}`
  })
);

export const createLocation = (location) => (
  $.ajax({
    method: "POST",
    url: "/api/locations",
    data: {location}
  })
);
