import React from 'react';
import { Icon } from '@iconify/react';
// import { Icon } from '@iconify/react';
// import { Icon } from '@iconify/react';

export default function Cards(props) {
  const {
    title,
    ingredients,
    recipe,
    image,
    category,
    servings,
  } = props;

  const renderCategory = (category) => {
    if (category === 'fish') {
      return <Icon icon="noto-v1:fish" color="blue" width="40" height="40" hFlip={true} />;
    } else if (category === 'meat') {
      return <Icon icon="game-icons:steak" color="red" width="40" height="40" />;
    } else if (category === 'gluten-free') {
      return <Icon icon="mdi:gluten-free" color="green" width="40" height="40" />;
    } else {
      return null;
    }
  };

  return (
    <>
      <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4 col-xxl-4'>
        <div className='card h-95 shadow rounded my-4'>
          <div className='card-body lead'>
            <div className='d-flex justify-content-evenly '></div>

            <img src={image} alt={title}/>
            <h3 className='card-title'>
              {title} 
            </h3>
            <p className=''>{ingredients}</p>
            <p className=''>{recipe}</p>
            <p className=''> serving: {servings}
                {renderCategory(category)}
            </p>
            <div className='d-grid justify-content-end mt-'></div>
          </div>
        </div>
      </div>
    </>
  );
}


