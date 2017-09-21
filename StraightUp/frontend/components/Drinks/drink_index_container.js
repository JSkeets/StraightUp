import { connect } from 'react-redux';
import DrinkIndex from './drink_index';
import { fetchDrinks } from '../../actions/drink_actions';
import { selectAllDrinks } from '../../reducers/selectors';

const mapStateToProps = state => ({
  drinks: selectAllDrinks(state)
});

const mapDispatchToProps = dispatch => ({
  fetchDrinks: () => dispatch(fetchDrinks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkIndex);
