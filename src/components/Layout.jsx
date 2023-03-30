import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';





export default function Layout() {
  return (
    <div className='root-layout'>
    <header>
      <nav>
        <h1 className='text-dark'>Anala's recipes</h1>
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
