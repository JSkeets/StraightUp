import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review, user, location}) => {
  if (!user ){
    return null;
  }
  if (!review) {
    return null;
  }
  if (!location){
    return null;
  }
    return (<li className="review-index-item">
    <h1>Review</h1>
    <p>{location.name}</p>
    <p>{user.username}</p>
    <p>{review.rating}</p>
    <p>{review.body}</p>
  </li>
);
};

export default ReviewIndexItem;
