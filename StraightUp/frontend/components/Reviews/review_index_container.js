import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchLocations } from '../../actions/location_actions';
import { selectAllReviews } from '../../reducers/selectors';


const mapStateToProps = state => ({
  reviews: selectAllReviews(state),
  users: state.entities.users,
  locations: state.entities.locations
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchLocations: () => dispatch(fetchLocations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
