import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className='help-layout'>
        <h2>Website Help</h2>
        {/* lorem10 */}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, debitis?</p>

        <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

        <Outlet/>
    </div>
  )
}
