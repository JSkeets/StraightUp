import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from "../actions/review_actions";
import merge from 'lodash/merge';


let ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({},state,action.reviews);
    case RECEIVE_REVIEW:
      return merge({},state,{[action.review.id]: action.review});
    default:
      return state;
  }
};

export default ReviewsReducer;
