import React from 'react';
import ReviewAdd from './ReviewAdd';
import ListReviews from './ListReviews';
import { Typography } from '@mui/material';

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
      <Typography variant="h3" style={{ textAlign: 'center', marginTop: '40px', fontSize: '40px' }}>
      Reviews and Rating
    </Typography>
    
      <ListReviews reviews={reviews} />
    </div>
  );
};

export default ReviewPage;
