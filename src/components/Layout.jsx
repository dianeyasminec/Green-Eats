import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';




export default function Layout() {
  return (
    <div className='root-layout'>
    <header>
      <nav>
      <Navbar.Brand href="#home">Anala's recipes</Navbar.Brand>
        <NavLink to="/">About</NavLink>
        <NavLink to="allrecipes">All Recipes</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <NavLink to="help">Help</NavLink>
      </nav>
    </header>
    <main>
    <Outlet/>
    </main>
      </div>
  )
}
