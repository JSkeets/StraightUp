import React from "react";
import { Route } from "react-router-dom";
import LocationReviewIndexItem from "./location_review_index_item";
class LocationProfile extends React.Component {
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
		console.log("SHOW PROPS", this.props);
		if (this.props.reviews.length === 0) {
			return (
				<div className="user-empty-dashboard">
					<div className="dashboard">
						<ul id="review-index">
							<li> You haven't reviewed anything yet!</li>
							<div className="user-title">Your Reviews</div>
						</ul>
					</div>
				</div>
			);
		} else {
			return (
				<div className="user-dashboard">
					<ul id="review-index">
						{this.props.reviews.map(review => (
							<LocationReviewIndexItem
								destroyReview={() => this.props.destroyUserReview(review)}
								key={review.user_id}
								review={review}
								user={this.props.users[review.user_id]}
								drink={this.props.drinks[review.drink_id]}
								location={this.props.locations[review.location_id]}
							/>
						))}
						<div className="user-title" />
					</ul>
				</div>
			);
		}
	}
}

export default LocationProfile;
