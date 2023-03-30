import React from 'react';
import gif from './Images/sl11.jpg'


export default function ControlledCarousel() {
  

  return (
    <div>
      <img src={gif} alt="My animated GIF" className='homepage-image'/>
      <p>This is some text that comes after the GIF.</p>
    </div>
  );
}

// render(<ControlledCarousel />);