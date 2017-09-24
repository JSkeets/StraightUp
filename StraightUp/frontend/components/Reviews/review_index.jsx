import React from 'react';
import { Route } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';
class ReviewIndex extends React.Component {


  componentDidMount(){
    this.props.fetchReviews();
    this.props.fetchUsers();
    this.props.fetchLocations();
    this.props.fetchDrinks();
  }

  render(){

    return (
      <div className="dashboard">
      <ul id="review-index">

        {this.props.reviews.map(review =>
          <ReviewIndexItem
            key={review.id}
            review={review}
            drink={this.props.drinks[review.drink_id]}
            user={this.props.users[review.user_id]}
            location={this.props.locations[review.location_id]}
            />
        )}
      </ul>
      </div>
    );
  }
}

export default ReviewIndex;
