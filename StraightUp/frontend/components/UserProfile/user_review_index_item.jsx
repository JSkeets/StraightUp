import React from 'react';
import { Link } from 'react-router-dom';

const UserReviewIndexItem = ({ review, drink, user, location, destroyReview}) => {


  if(!drink){
    return null;
  }
    return (<li className="review-index-item">
    <p>You had a {drink.name} at {location.name} and gave it {review.rating}&nbsp;
        out of 5
    </p>
    <button>Edit Review</button>
      <br />
    <button onClick={destroyReview}>Delete Review</button>
    <br />
  </li>
);
};

export default UserReviewIndexItem;
