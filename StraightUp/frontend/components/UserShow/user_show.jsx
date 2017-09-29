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
		console.log("SHOW PROPS", this.props);
		let user = this.props.users[parseInt(this.props.match.params.userId)];
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
							<UserReviewIndexItem
								destroyReview={() => this.props.destroyUserReview(review)}
								key={review.id}
								user={
									this.props.users[parseInt(this.props.match.params.userId)]
								}
								review={review}
								drink={this.props.drinks[review.drink_id]}
								location={this.props.locations[review.location_id]}
							/>
						))}
						<div className="user-title">
							Reviews by{" "}
							{
								this.props.users[parseInt(this.props.match.params.userId)]
									.username
							}
						</div>
					</ul>
				</div>
			);
		}
	}
}

export default UserProfile;
