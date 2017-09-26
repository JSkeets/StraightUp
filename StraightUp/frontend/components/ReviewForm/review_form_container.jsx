import { connect } from 'react-redux';

import { createReview, updateUserReview} from '../../actions/review_actions';
import ReviewForm from './review_form';
import { fetchReviews } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchLocations } from '../../actions/location_actions';
import { fetchDrinks } from '../../actions/drink_actions';
import { selectAllDrinks, selectAllLocations } from '../../reducers/selectors';

const mapStateToProps = (state,ownProps) => {
  let review = {  drink_id: "",
      location_id: "",
      rating: "",
      body:"",
      user_id:state.session.currentUser.id
    };
    let formType = "new";
    if (ownProps.match.path == "/reviews/:reviewId/edit") {
      review = state.entities.reviews[ownProps.match.params.reviewId];
      formType = "edit";
    }
  return {
    review,
    formType,
    errors: state.errors.reviews || [],
    currentUser: state.session.currentUser.id,
    users: state.entities.users,
    locations: selectAllLocations(state),
    drinks: selectAllDrinks(state),
    autoDrinks: state.entities.drinks,
    autoLocations: state.entities.locations
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
    const action = ownProps.match.path === "/reviews/:reviewId/edit" ?  updateUserReview : createReview;
    return {
    processForm: review => dispatch(action(review)),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchLocations: () => dispatch(fetchLocations()),
    fetchDrinks: () => dispatch(fetchDrinks()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
