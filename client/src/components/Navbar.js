import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <a href="/">Inquire</a>
      <ul>
        <li>
          <NavLink to="/">Login with Google</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
