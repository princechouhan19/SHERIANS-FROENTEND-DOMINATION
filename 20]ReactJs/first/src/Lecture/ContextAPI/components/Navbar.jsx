import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 flex gap-8 px-10 py-3 rounded-full bg-white/20 backdrop-blur-lg shadow-lg z-50">
        
        {/* NavLink is a special link that adds "active" class to the element when the current URL matches its `to` prop.
        This NavLink navigates to the Home route ('/'). It applies inline styles based on its `isActive` status. */}
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            color: isActive ? "black" : "grey",
            fontWeight: isActive ? "bold" : "normal",
          })}
          className="font-medium text-lg transition hover:-translate-y-0.5"
        >
          Home
        </NavLink>

        <NavLink 
          to="/User"
          className={({ isActive })=>`font-medium text-lg transition hover:-translate-y-0.5 ${isActive ? "text-black font-semibold" : "text-grey"} `}
        >
          User
        </NavLink>

        
        <NavLink 
          to="/about"
          className={({ isActive })=>`font-medium text-lg transition hover:-translate-y-0.5 ${isActive ? "text-black font-semibold" : "text-grey"} `}
        >
          About
        </NavLink>

      </nav>
  )
}

export default Navbar