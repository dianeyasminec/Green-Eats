// import React from 'react'

// export default function Reviews() {
//   return (
//     <div>Reviews</div>
//   )
// }

import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: 'John', rating: 5, comment: 'This recipe is amazing!' },
    { id: 2, user: 'Jane', rating: 4, comment: 'It was pretty good.' },
    { id: 3, user: 'Bob', rating: 3, comment: 'It was just okay.' },
  ]);

  const renderStars = (rating) => {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '★';
    }
    for (let i = rating; i < 5; i++) {
      stars += '☆';
    }
    return stars;
  };

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <h3>{review.user}</h3>
          <p>{renderStars(review.rating)}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
