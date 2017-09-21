import { RECEIVE_DRINKS, RECEIVE_DRINK } from "../actions/drink_actions";
import merge from 'lodash/merge';

let DrinksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_DRINKS:
      return merge({},state,action.drinks);
    case RECEIVE_DRINK:
      return merge({},state,{[action.drink.id]: action.drink});
    default:
      return state;
  }
};

export default DrinksReducer;
