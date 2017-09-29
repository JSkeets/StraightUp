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
				{user.username}&nbsp; had a &nbsp;
				<i id="drink-name">{drink.name}</i> at &nbsp;
				<Link id="location" to={`/locations/${location.id}/reviews`}>
					{location.name}
				</Link>&nbsp;
				{review.created_at} ago
			</div>
			<div className="body-container">
				<i id="body">{review.body}</i>
			</div>

			<br />
		</li>
	);
};

export default UserReviewIndexItem;
