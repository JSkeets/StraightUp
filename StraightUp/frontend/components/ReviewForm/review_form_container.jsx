import { connect } from 'react-redux';

import { createReview} from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.reviews || []
  };
};

const mapDispatchToProps = (dispatch) => ({
    processForm: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
