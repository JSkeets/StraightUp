import { connect } from 'react-redux';

import { createReview} from '../../actions/review_actions';
import ReviewForm from './review_form';
import { fetchReviews } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchLocations } from '../../actions/location_actions';
import { fetchDrinks } from '../../actions/drink_actions';
import { selectAllDrinks, selectAllLocations } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.reviews || [],
    currentUser: state.session.currentUser.id,
    users: state.entities.users,
    locations: selectAllLocations(state),
    drinks: selectAllDrinks(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
    processForm: review => dispatch(createReview(review)),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchLocations: () => dispatch(fetchLocations()),
    fetchDrinks: () => dispatch(fetchDrinks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
