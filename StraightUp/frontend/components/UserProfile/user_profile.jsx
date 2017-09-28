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
		console.log(this.props.reviews);
		if (this.props.reviews.length === 0) {
			return (
				<div className="dashboard">
					<ul id="review-index">
						<li> You haven't reviewed anything yet!</li>
						<div className="user-title">Your Reviews</div>
					</ul>
				</div>
			);
		} else {
			return (
				<div className="user-dashboard">
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
						<div className="user-title">Your Reviews</div>
					</ul>
				</div>
			);
		}
	}
}

export default UserProfile;
