import {NavLink, Outlet} from 'react-router-dom';
import React from "react";

function Nav() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink>
        <NavLink to="/color" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Color List</NavLink>
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Nav
