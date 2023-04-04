import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: 'John', rating: 5, comment: 'This recipe is amazing!', image: 'https://www.simplyhappyfoodie.com/wp-content/uploads/2018/11/classic-slow-cooker-beef-stew-1.jpg' },
    { id: 2, user: 'Jane', rating: 4, comment: 'It was pretty good! you got to try the Thai Peanut Dressing.', image: 'https://urbanblisslife.com/wp-content/uploads/2018/01/Thai-Peanut-Sauce-overhead.jpg' },
    { id: 3, user: 'Bob', rating: 3, comment: 'It was just okay.', image: 'https://freezermealfrenzy.com/wp-content/uploads/2019/06/tjoesglutenfreepankcakes02.jpg' },
    { id: 4, user: 'Alice', rating: 2, comment: 'Please follow the recipe :(.', image: 'https://www.budgetbytes.com/wp-content/uploads/2020/07/4-Cook-Chicken.jpg' },
    { id: 5, user: 'Charlie', rating: 5, comment: 'Best recipe ever! Thai Peanut Dressing with chicken ..DELICIOUS ', image: 'https://www.recipetineats.com/wp-content/uploads/2019/03/Thai-Satay-Chicken_8.jpg?w=500&h=500&crop=1' },
    { id: 6, user: 'Eve', rating: 4, comment: 'I am about to try Roasted Butternut Squash Quinoa Salad.', image: 'https://www.simplyscratch.com/wp-content/uploads/2022/09/Butternut-Squash-Kale-Quinoa-l-SimplyScratch.com-1-700x1049.jpg' },
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






