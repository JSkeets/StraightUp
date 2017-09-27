import React from "react";
import { Route } from "react-router-dom";
import UserReviewIndexItem from "./user_review_index_item";
class UserProfile extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchReviews();
		this.props.fetchUsers();
		this.props.fetchLocations();
		this.props.fetchDrinks();
	}

	render() {
		return (
			<div className="dashboard">
				<ul id="review-index">
					{this.props.reviews.map(review => (
						<UserReviewIndexItem
							destroyReview={() => this.props.destroyUserReview(review)}
							key={review.id}
							review={review}
							drink={this.props.drinks[review.drink_id]}
							location={this.props.locations[review.location_id]}
						/>
					))}
					Your Reviews
				</ul>
			</div>
		);
	}
}

export default UserProfile;
