import React from 'react';
import { Route } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';
class ReviewIndex extends React.Component {


  componentDidMount(){
    this.props.fetchReviews();
    this.props.fetchUsers();
    this.props.fetchLocations();
  }

  render(){
    console.log(this.props.locations);
    console.log(this.props.users);

    return (
      <div className="dashboard">
      <ul id="review-index">
        <h1> HELLO FROM REVIEWS </h1>
        {this.props.reviews.map(review =>
          <ReviewIndexItem
            key={review.id}
            review={review}
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
