export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
import * as UsersUtil from '../util/users_api_util';

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const receiveErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (user) => dispatch => (
  UsersUtil.fetchUser(user).then(res => dispatch(receiveUser(res))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  )
);

export const fetchUsers = () => dispatch => (
  UsersUtil.fetchUsers().tehn(users => dispatch(receiveUsers(users)))
);

export const createUser = (user) => dispatch => (
  UsersUtil.createUser(user).then(res => dispatch(receiveUser(res))
  ), err => (
    dispatch(receiveErrors(err.responseJson))
  )
);
