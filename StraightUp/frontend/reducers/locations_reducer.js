import { RECEIVE_LOCATIONS, RECEIVE_LOCATION } from "../actions/location_actions";
import merge from 'lodash/merge';

let LocationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_LOCATIONS:
      return merge({},state,action.locations);
    case RECEIVE_LOCATION:
      return merge({},state,{[action.location.id]: action.location});
    default:
      return state;
  }
};

export default LocationsReducer;
