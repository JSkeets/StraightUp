import { connect } from 'react-redux';

import { createUser} from '../../actions/user_actions';
import SignUpForm from './login_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(createUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
