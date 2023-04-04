import React from 'react';
import gif from './Images/sl11.jpg'


export default function ControlledCarousel() {
  

  return (
    <div>
      <img src={gif} alt="My animated GIF" className='homepage-image'/>
      <p>~Food is not just eating energy. It's an experience~</p>
    </div>
  );
}

// render(<ControlledCarousel />);