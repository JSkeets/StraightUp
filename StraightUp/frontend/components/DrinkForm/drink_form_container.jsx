import { connect } from 'react-redux';

import { createDrink} from '../../actions/drink_actions';
import DrinkForm from './drink_form';
import { fetchDrinks } from '../../actions/drink_actions';


const mapStateToProps = (state) => {
  return {

    errors: state.errors.drinks || []
  };
};

const mapDispatchToProps = (dispatch) => ({
    processForm: location => dispatch(createDrink(location)),
    fetchDrinks: () => dispatch(fetchDrinks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkForm);
