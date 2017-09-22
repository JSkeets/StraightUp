import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review }) => (
  <li className="review-index-item">
    <h1>Review</h1>
    <p>{review.location_id}</p>
    <p>{review.user_id}</p>
    <p>{review.rating}</p>
    <p>{review.body}</p>
  </li>
);

export default ReviewIndexItem;