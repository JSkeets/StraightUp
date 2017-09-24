import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review, user, location, drink}) => {
  if (!user ){
    return null;
  }
  if (!review) {
    return null;
  }
  if (!location){
    return null;
  }

  if(!drink){
    return null;
  }
    return (<li className="review-index-item">
    <p> {user.username} is drinking a {drink.name} at {location.name} and rates it a {review.rating} </p>

    <p>{review.body}</p>
    <br />
  </li>
);
};

export default ReviewIndexItem;
