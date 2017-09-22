import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review, user, location}) => {
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
