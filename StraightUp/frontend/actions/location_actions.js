export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS";
export const RECEIVE_LOCATION_ERRORS = "RECEIVE_LOCATION_ERRORS";

import * as LocationsUtil from '../util/locations_api_util';

const receiveLocations = (locations) => ({
  type: RECEIVE_LOCATIONS,
  locations
});

const receiveLocationErrors = (errors) => ({
  type: RECEIVE_LOCATION_ERRORS,
  errors
});

const receiveLocation = (location) => {
  console.log("INSIDE RECEIVE LOCATION",location);
  return {
  type: RECEIVE_LOCATION,
  location
};
};

export const fetchLocations = () => dispatch => (
  LocationsUtil.fetchLocations().then(locations => dispatch(receiveLocations(locations)))
);

export const fetchLocation = (location) => dispatch => (
  LocationsUtil.fetchLocation(location).then(res =>
    dispatch(receiveLocation(res))
  ), err => (
    dispatch(receiveLocationErrors(err.responseJSON))
  )
);

export const createLocation = location => dispatch => {
  return (LocationsUtil.createLocation(location).then(res => (
    dispatch(receiveLocation(res))
  ), err => (
    dispatch(receiveLocationErrors(err.responseJSON))
  ))
);
};
