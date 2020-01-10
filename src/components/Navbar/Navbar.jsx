import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink to="/rooms" activeClassName="chosen" className="link-item">
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            activeClassName="chosen"
            className="link-item"
          >
            Bookings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/visitors"
            activeClassName="chosen"
            className="link-item"
          >
            Visitors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
