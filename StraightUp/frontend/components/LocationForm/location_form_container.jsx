import { connect } from "react-redux";

import { createLocation } from "../../actions/location_actions";
import LocationForm from "./location_form";
import { fetchLocations } from "../../actions/location_actions";

const mapStateToProps = state => {
	return {
		errors: state.errors.locations || []
	};
};

const mapDispatchToProps = dispatch => ({
	processForm: location => dispatch(createLocation(location)),
	fetchLocations: () => dispatch(fetchLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
