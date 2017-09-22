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

const receiveLocation = (review) => ({
  type: RECEIVE_LOCATION,
  review
});

export const fetchLocations = () => dispatch => (
  LocationsUtil.fetchLocations().then(locations => dispatch(receiveLocations(locations)))
);

export const fetchLocation = (review) => dispatch => (
  LocationsUtil.fetchLocation(review).then(res =>
    dispatch(receiveLocation(res))
  ), err => (
    dispatch(receiveLocationErrors(err.responseJSON))
  )
);

export const createLocation = review => dispatch => (
  LocationsUtil.createLocation(review).then(res => (
    dispatch(receiveLocation(res))
  ), err => (
    dispatch(receiveLocationErrors(err.responseJSON))
  ))
);
