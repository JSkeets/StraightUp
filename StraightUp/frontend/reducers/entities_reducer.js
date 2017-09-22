import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import DrinksReducer from './drinks_reducer';
import ReviewsReducer from './reviews_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  drinks: DrinksReducer,
  reviews: ReviewsReducer
});

export default EntitiesReducer;
