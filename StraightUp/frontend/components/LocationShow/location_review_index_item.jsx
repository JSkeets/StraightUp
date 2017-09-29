import React from "react";
import { Link } from "react-router-dom";

const LocationReviewIndexItem = ({
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
				<Link id="username" to={`/users/${user.id}/reviews`}>
					{user.username}
				</Link>&nbsp;had a &nbsp;
				<i id="drink-name">{drink.name}</i> at &nbsp;
				<i id="location">{location.name}</i>&nbsp;
				{review.created_at} ago
			</div>
			<div className="body-container">
				<i id="body">{review.body}</i>
			</div>

			<br />
		</li>
	);
};

export default LocationReviewIndexItem;
