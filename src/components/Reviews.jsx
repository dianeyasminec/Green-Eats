import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: 'John', rating: 5, comment: 'This recipe is amazing!', image: 'https://via.placeholder.com/50' },
    { id: 2, user: 'Jane', rating: 4, comment: 'It was pretty good.', image: 'https://via.placeholder.com/50' },
    { id: 3, user: 'Bob', rating: 3, comment: 'It was just okay.', image: 'https://via.placeholder.com/50' },
    { id: 4, user: 'Alice', rating: 2, comment: 'I did not like it.', image: 'https://via.placeholder.com/50' },
    { id: 5, user: 'Charlie', rating: 5, comment: 'Best recipe ever!', image: 'https://via.placeholder.com/50' },
    { id: 6, user: 'Eve', rating: 4, comment: 'Good recipe.', image: 'https://via.placeholder.com/50' },
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

  const half = Math.ceil(reviews.length / 2);
  const leftReviews = reviews.slice(0, half);
  const rightReviews = reviews.slice(half);

  return (
    <>
    <h2 className='text-center p-3'>Reviews</h2>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        {leftReviews.map((review) => (
          <div key={review.id}>
            <h3>{review.user}</h3>
            <p>{renderStars(review.rating)}</p>
            <p>{review.comment}</p>
            {review.image && <img src={review.image} alt="User uploaded image"/>}
          </div>
        ))}
      </div>
      <div style={{ borderLeft: '1px solid black', height: '100%', flex: 1, paddingLeft: '1rem' }}>
        {rightReviews.map((review) => (
          <div key={review.id}>
            <h3>{review.user}</h3>
            <p>{renderStars(review.rating)}</p>
            <p>{review.comment}</p>
            {review.image && <img src={review.image} alt="User uploaded image"/>}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Reviews;






