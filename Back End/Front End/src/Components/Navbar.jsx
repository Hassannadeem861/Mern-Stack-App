import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <NavLink>Hassan Nadeem</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"} className={Link}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/service"}>Service</NavLink>
              </li>
              <li>
                <NavLink to={"/register"}>Register</NavLink>
              </li>
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

// export default Navbar
