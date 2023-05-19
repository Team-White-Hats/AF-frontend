import React from 'react';
import { Card, CardContent, Typography, Box, Divider,  Rating } from '@mui/material';
import { useState, useEffect } from "react";
import Axios from "axios";

const ListReviews = ({ reviews }) => {

  const [listOfreview, setlistOfreview] = useState([]);

  // Hardcoded example reviews
//   const hardcodedReviews = [
//     { _id: 1, rating: 1, name: 'John Doe', email: 'john@gmail.com', reviewHeader:'Cultural Products are amaizing', comment: 'Great product!' },
//     { _id: 2, rating: 2, name: 'Jane Smith', email: 'jane@gmail.com',  reviewHeader:'Quality products selling', comment: 'you are doing great' },
//     { _id: 3, rating: 3, name: 'Alex John', email: 'alex@gmail.com', reviewHeader:'Interseting cultural places visiting',comment: 'Visiting Sri Lanka cultural places was like stepping back in time. The ancient ruins and temples were truly mesmerizing. Visiting the sacred sites of Sri Lanka allowed me to understand the deep-rooted religious practices and beliefs of the locals. It was a truly enlightening experience.' },
//     { _id: 1, rating: 4, name: 'Fiyas Far', email: 'fiyas@gmail.com', reviewHeader:'Amaizing Service', comment: 'We really appreciate that you gave service and Galle Fort was a delightful blend of colonial architecture and Sri Lankan charm. The cobblestone streets and historic buildings made it a perfect spot for a leisurely stroll.' },
//     { _id: 2, rating: 5, name: 'Nanny Pep', email: 'nanny@gmail.com', reviewHeader:'Admire the service',comment: 'The vibrant cultural shows in Sri Lanka showcased the traditional dances, music, and costumes of the country. It was a feast for the senses.' },
//     { _id: 3, rating: 6, name: 'Alex Johnson', email: 'john@gmail.com', reviewHeader:'Your services are really good',comment: 'The sacred Tooth Relic Temple in Kandy was a spiritual experience. The rituals and the serene atmosphere left a lasting impression on me' },
   
// ];

useEffect(() => {
  Axios.get("http://localhost:8000/api/review/all").then((response) => {
    setlistOfreview(response.data);
  });
}, []);

  return (
    <div className="reviews-container" style={{ display: 'flex', justifyContent: 'center' }}>
         <div className="reviews w-75" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} >
    
      {listOfreview &&
        listOfreview.map((review) => (
          <Card key={review._id} sx={{ my: 3, boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.6)', borderRadius: '8px', maxWidth: '500px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating value={review.rating} max={5} readOnly />
              <Typography variant="body2" className="review_user" sx={{ ml: 2, fontWeight: 'bold', fontSize: '0.8rem'}}>
                by {review.name}
              </Typography>
            </Box>
            <Typography variant="body2" className="review_user" sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}>
              {review.email}
            </Typography>
            <Typography variant="body1" className="review_comment" sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}>
              Rating: {review.rating}
            </Typography>
            <Typography variant="body2" className="review_user" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
              {review.reviewHeader}
            </Typography>
            <Typography variant="body1" className="review_comment" style={{ wordWrap: 'break-word', fontSize: '0.9rem' }}>
              {review.review}
            </Typography>
          </CardContent>
          <Divider />
        </Card>
        ))}

      {/* Hardcoded reviews */}
      {/* {hardcodedReviews.map((review) => (
        <Card key={review._id} sx={{ my: 3, boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.6)', borderRadius: '8px', maxWidth: '500px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating value={review.rating} max={5} readOnly />
              <Typography variant="body2" className="review_user" sx={{ ml: 2, fontWeight: 'bold', fontSize: '0.8rem'}}>
                by {review.name}
              </Typography>
            </Box>
            <Typography variant="body2" className="review_user" sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}>
              {review.email}
            </Typography>
            <Typography variant="body1" className="review_comment" sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}>
              Rating: {review.rating}
            </Typography>
            <Typography variant="body2" className="review_user" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
              {review.reviewHeader}
            </Typography>
            <Typography variant="body1" className="review_comment" style={{ wordWrap: 'break-word', fontSize: '0.9rem' }}>
              {review.comment}
            </Typography>
          </CardContent>
          <Divider />
        </Card>
      ))} */}
    </div>
    </div>
  );
};

export default ListReviews;
