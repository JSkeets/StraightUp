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
				<i id="location">{location.name}</i>&nbsp;
				{review.created_at} ago
			</div>
			<div className="body-container">
				<i id="body">{review.body}</i>
			</div>

			<div className="user-buttons">
				<Link className="user-edit-button" to={`reviews/${review.id}/edit`}>
					Edit Review
				</Link>
				<br />
				<button className="user-delete-button" onClick={destroyReview}>
					Delete Review
				</button>
			</div>
			<br />
		</li>
	);
};

export default UserReviewIndexItem;
