import values from 'lodash/values';

export const selectAllDrinks = (state) => values(state.entities.drinks);

export const selectAllReviews = (state) => values(state.entities.reviews);

export const selectAllUsers = (state) => values(state.entities.users);
