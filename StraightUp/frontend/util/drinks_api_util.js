  export const fetchDrinks = () => (
  $.ajax({
    method: "GET",
    url: "api/drinks"
  })
);

export const createDrink = (drink) => (
  $.ajax({
    method: "POST",
    url: "/api/drinks",
    data: {drink}
  })
);

export const fetchDrink = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  })
);
