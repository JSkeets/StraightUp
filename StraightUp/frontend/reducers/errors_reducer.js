import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import UsersErrorsReducer from './users_errors_reducer';
import DrinksErrorsReducer from './drinks_errors_reducer';
import ReviewsErrorsReducer from './reviews_errors_reducer';
import LocationsErrorsReducer from './locations_errors_reducer';
const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  users: UsersErrorsReducer,
  drinks: DrinksErrorsReducer,
  reviews: ReviewsErrorsReducer,
  locations: LocationsErrorsReducer

});

export default ErrorsReducer;
