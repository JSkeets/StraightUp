import { connect } from 'react-redux';
import  UserProfile from './user_profile';
import { fetchReviews, destroyUserReview } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchLocations } from '../../actions/location_actions';
import { fetchDrinks } from '../../actions/drink_actions';
import {selectUserReviews} from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  reviews: selectUserReviews(state),
  users: state.entities.users,
  locations: state.entities.locations,
  drinks: state.entities.drinks
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchLocations: () => dispatch(fetchLocations()),
  fetchDrinks: () => dispatch(fetchDrinks()),
  destroyUserReview: (review) => dispatch(destroyUserReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
