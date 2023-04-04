import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap'




export default function Layout() {
  return (



    <div className='root-layout'>
    <header>
      <nav>
      <Navbar.Brand > 
            Nourish & Nature
      </Navbar.Brand>

      <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
        <NavLink to="/">About</NavLink>
        <NavLink to="allrecipes">All Recipes</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <NavLink to="help">Help</NavLink>
        </Nav>
      </nav>
    </header>
    <main>
    <Outlet/>
    </main>
      </div>
  )
}
