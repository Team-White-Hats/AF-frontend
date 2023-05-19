import React from 'react';
import ReviewAdd from '../';
import ListReviews from './ListReviews';

const ReviewPage = () => {
  // Assuming have a state to store the submitted reviews
  const [reviews, setReviews] = React.useState([]);

  // Function to handle adding a review
  const handleAddReview = (review) => {
    // Add the new review to the reviews state
    setReviews([...reviews, review]);
  };

  return (
    <div>
      <ReviewAdd onAddReview={handleAddReview} />
      <ListReviews reviews={reviews} />
    </div>
  );
};

export default ReviewPage;
