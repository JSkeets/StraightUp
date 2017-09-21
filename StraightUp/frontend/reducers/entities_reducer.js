import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import DrinksReducer from './drinks_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  drinks: DrinksReducer
});

export default EntitiesReducer;
