import { RECEIVE_REVIEW_ERRORS,RECEIVE_REVIEW} from '../actions/review_actions';

const _nullErrors = [];

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case RECEIVE_REVIEW:
      return _nullErrors;
    default:
    return state;

  }
};
