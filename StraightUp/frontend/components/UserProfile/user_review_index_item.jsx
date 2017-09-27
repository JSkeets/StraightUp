import React from "react";
import { Link } from "react-router-dom";

const UserReviewIndexItem = ({
	review,
	drink,
	user,
	location,
	destroyReview
}) => {
	if (!drink) {
		return null;
	}
	return (
		<li className="review-index-item">
			<i id="review-rating">{review.rating}/5</i>
			<div className="review-sentence">
				You had a &nbsp;
				<i id="drink-name">{drink.name}</i> at &nbsp;
				<i id="location">{location.name}</i>
			</div>
			<div className="body-container">
				<i id="body">{review.body}</i>
			</div>

			<div className="review-buttons">
				<Link to={`reviews/${review.id}/edit`}>Edit Review</Link>
				<br />
				<button onClick={destroyReview}>Delete Review</button>
			</div>
			<br />
		</li>
	);
};

export default UserReviewIndexItem;
