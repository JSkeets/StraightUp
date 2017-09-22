import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import DrinksReducer from './drinks_reducer';
import ReviewsReducer from './reviews_reducer';
import LocationsReducer from './locations_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  drinks: DrinksReducer,
  reviews: ReviewsReducer,
  locations: LocationsReducer
});

export default EntitiesReducer;
