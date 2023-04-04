import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap'

export default function Layout() {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <Navbar.Brand>Green Eats</Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <NavLink to="/" style={{ marginRight: '150px' }}>About</NavLink>
            <NavLink to="allrecipes" style={{ marginRight: '150px' }}>All Recipes</NavLink>
            <NavLink to="reviews" style={{ marginRight: '150px' }}>Reviews</NavLink>
            <NavLink to="help" style={{ marginRight: '20px' }}>Help</NavLink>
          </Nav>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
