import React from 'react'

export default function Footer() {
  return (
   <div className="main-footer bg-success text-light " > 
        <div className="container"> 
            <div className='row'> 
              <div className='col-md-3 col-sm-6'> 
              <h4>Contact </h4>
              <address style={{  
  padding: '10px', 
  textAlign: 'center', 
  fontSize: '16px',
}}>
  Written by  
  <a href="mailto:dianeyasminec60@gmail.com" style={{ 
    textDecoration: 'underline', 
    color: 'white',
  }}> Diane Compaore</a>
  <br />
  USA New York
</address>
</div>
        </div>
            <div className="footer-bottom">
                <p className="text-end"> 
                    &copy; {new Date().getFullYear()} Diane Compaore - All rights reserved.                
                </p>
            </div>
        </div>
        
   </div>
  )
}
