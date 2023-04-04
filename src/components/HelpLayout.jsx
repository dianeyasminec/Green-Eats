import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className='help-layout text-center'>
        <h2 >Website Help</h2>
         <p>
         Welcome to our Help section! Here you can find answers to frequently asked questions 
         and get in touch with our support team through our Contact page. If you have any 
         questions or concerns about our product or service, please don't hesitate to reach out.
          Our friendly support team is always ready to assist you
          </p>
        <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

        <Outlet/>
    </div>
  )
}
