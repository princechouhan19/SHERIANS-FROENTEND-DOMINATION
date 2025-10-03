import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 flex gap-8 px-10 py-3 rounded-full bg-white/20 backdrop-blur-lg shadow-lg z-50">
        
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            color: isActive ? "black" : "white",
            fontWeight: isActive ? "bold" : "normal",
          })}
          className="font-medium text-lg transition hover:-translate-y-0.5"
        >
          Home
        </NavLink>

        <NavLink 
          to="/User"
          className={({ isActive })=>`font-medium text-lg transition hover:-translate-y-0.5 ${isActive ? "text-black font-semibold" : "text-white"} `}
        >
          User
        </NavLink>

        <NavLink 
          to="/About" 
          style={({ isActive }) => ({
            color: isActive ? "black" : "white",
            fontWeight: isActive ? "bold" : "normal",
          })}
          className="font-medium text-lg transition  hover:-translate-y-0.5"
        >
          About
        </NavLink>

      </nav>
    </div>
  );
};

export default Navbar;
