export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

import * as ReviewsUtil from "../util/reviews_api_util";
import * as UsersUtil from "../util/users_api_util";

const receiveReviews = reviews => ({
	type: RECEIVE_REVIEWS,
	reviews
});

const receiveReviewErrors = errors => {
	return {
		type: RECEIVE_REVIEW_ERRORS,
		errors
	};
};

const receiveReview = review => {
	return {
		type: RECEIVE_REVIEW,
		review
	};
};

const removeReview = review => ({
	type: REMOVE_REVIEW,
	review
});

export const fetchReviews = () => dispatch =>
	ReviewsUtil.fetchReviews().then(reviews => dispatch(receiveReviews(reviews)));

export const fetchReview = review => dispatch => (
	ReviewsUtil.fetchReview(review).then(res => dispatch(receiveReview(res))),
	err => dispatch(receiveReviewErrors(err.responseJSON))
);

export const createReview = review => dispatch => {
	return ReviewsUtil.createReview(review).then(
		res => dispatch(receiveReview(res)),
		err => dispatch(receiveReviewErrors(err.responseJSON))
	);
};

export const destroyUserReview = review => dispatch =>
	UsersUtil.destroyUserReview(review).then(res => dispatch(removeReview(res)));

export const updateUserReview = review => dispatch =>
	UsersUtil.updateUserReview(review).then(res => dispatch(receiveReview(res)));
