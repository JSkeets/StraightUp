import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';
import { selectAllReviews } from '../../reducers/selectors';

const mapStateToProps = state => ({
  reviews: selectAllReviews(state)
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
