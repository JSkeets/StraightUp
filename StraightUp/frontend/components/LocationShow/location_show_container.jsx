import { connect } from "react-redux";
import LocationShow from "./location_show";
import { fetchUsers } from "../../actions/user_actions";
import { fetchLocations } from "../../actions/location_actions";
import { fetchDrinks } from "../../actions/drink_actions";
import { selectLocationShowReviews } from "../../reducers/selectors";
import { fetchReviews } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	reviews: selectLocationShowReviews(state, ownProps),
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationShow);
