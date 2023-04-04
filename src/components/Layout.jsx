import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Layout() {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <Navbar.Brand href="#home" >
          </Navbar.Brand>
          <NavLink to="/">About</NavLink>
          <NavLink to="allrecipes">All Recipes</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
          <NavDropdown title="Help">
            <NavDropdown.Item to="faq">FAQ</NavDropdown.Item>
            <NavDropdown.Item href="contact">Contact Us</NavDropdown.Item>
          </NavDropdown>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

