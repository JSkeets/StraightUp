import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchLocations } from '../../actions/location_actions';
import { fetchDrinks } from '../../actions/drink_actions';
import { selectAllReviews } from '../../reducers/selectors';


const mapStateToProps = state => ({
  reviews: selectAllReviews(state),
  users: state.entities.users,
  locations: state.entities.locations,
  drinks: state.entities.drinks
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchLocations: () => dispatch(fetchLocations()),
  fetchDrinks: () => dispatch(fetchDrinks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
