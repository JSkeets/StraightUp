import values from 'lodash/values';

export const selectAllDrinks = (state) => values(state.entities.drinks);

export const selectAllReviews = (state) => values(state.entities.reviews);

export const selectAllUsers = (state) => values(state.entities.users);

export const selectAllLocations = (state) => values(state.entities.locations);

export const selectUserReviews = (state) => {
 let val = values(state.entities.reviews);
 let matched = val.filter((review) => {
   return (review.user_id === state.session.currentUser.id);
 });
 return matched;
};
// 
// export const selectUserReviews = (state) => {
//     let userReviews = state.session.currentUser.review_ids;
//     let reviews = [];
//     if (state.entities.reviews[userReviews[0]] === undefined){
//       return [];
//     }
//     userReviews.forEach((id) => {
//
//
//       reviews.push(state.entities.reviews[id]);
//     });
//   return(reviews);
// };
