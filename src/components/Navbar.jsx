import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
return (
  <div className="w-dvw h-14 bg-gray-900 flex items-center justify-center space-x-6 shadow-md">
    <NavLink
      to="/"
      className="text-gray-200 hover:text-cyan-400 transition duration-200 font-medium"
    >
      Home
    </NavLink>
    <NavLink
      to="/pastes"
      className="text-gray-200 hover:text-cyan-400 transition duration-200 font-medium"
    >
      Pastes
    </NavLink>

  </div>
);

}

export default Navbar
