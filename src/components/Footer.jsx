import React from 'react'

export default function Footer() {
  return (
   <div className="main-footer bg-secondary text-light " > 
        <div className="container"> 
            <div className='row'> 
              <div className='col-md-3 col-sm-6'> 
              <h4>Contact </h4>
              <address>
            Written by <a href="mailto:dianeyasminec60@gmail.com" 
            style={{ textDecoration: 'none' }}
            >Diane Compaore
            </a>.
            <br/>
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
