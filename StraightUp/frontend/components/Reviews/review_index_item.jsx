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
    <p>{user.username} is boozing on</p>
    <p>{drink.name}</p>
    <p>{location.name}</p>
    <p>{review.rating}</p>
    <p>{review.body}</p>
    <br />
  </li>
);
};

export default ReviewIndexItem;
