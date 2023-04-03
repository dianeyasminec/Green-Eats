import React from 'react';
import { FaFish } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { BsCircleFill } from 'react-icons/bs';

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
    if (category === 'fishs') {
      return <FaFish aria-label="Fish" />;
    } else if (category === 'meats') {
      return <GiMeal aria-label="Meat" />;
    } else if (category === 'gf') {
      return <BsCircleFill aria-label="Gluten-free" />;
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


