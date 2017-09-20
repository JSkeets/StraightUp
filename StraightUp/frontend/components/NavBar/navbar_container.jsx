import { connect } from 'react-redux';
import { logout, guest } from '../../actions/session_actions';
import  NavBar from './nav_bar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  guest: () => dispatch(guest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
