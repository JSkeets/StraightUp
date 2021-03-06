import { RECEIVE_DRINK_ERRORS} from '../actions/drink_actions';

const _nullErrors = [];

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DRINK_ERRORS:
      return action.errors;
    default:
    return state;

  }
};
