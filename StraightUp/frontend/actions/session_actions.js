import * as SessionUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => dispatch => (
  SessionUtil.login(user).then(currentUser =>
     dispatch(receiveCurrentUser(currentUser))
   ), err => (
     dispatch(receiveErrors(err.responseJSON))
   )
);

export const logout = () => dispatch => (
  SessionUtil.logout().then(user =>
    dispatch(receiveCurrentUser(null))
  )
);
