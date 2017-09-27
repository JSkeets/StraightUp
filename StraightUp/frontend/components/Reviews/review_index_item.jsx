import React from "react";
import { Link } from "react-router-dom";

const ReviewIndexItem = ({ review, user, location, drink }) => {
	if (!user) {
		return null;
	}
	if (!review) {
		return null;
	}
	if (!location) {
		return null;
	}

	if (!drink) {
		return null;
	}
	return (
		<li className="review-index-item">
			<p>
				<i id="username">{user.username}</i> had a
				<i id="drink-name">{drink.name}</i> at
				<i id="location">{location.name}</i> and rates it a
				<i id="review-rating">{review.rating}/5</i>
				<i id="body">{review.body}</i>
			</p>
			<br />
		</li>
	);
};

export default ReviewIndexItem;
