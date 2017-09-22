import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import { selectAllReviews, selectAllUsers } from '../../reducers/selectors';


const mapStateToProps = state => ({
  reviews: selectAllReviews(state),
  users: selectAllUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
