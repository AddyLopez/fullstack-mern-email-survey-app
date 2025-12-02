import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = () => {
  return (
    <nav>
      <a href="/">Inquire</a>
      <ul>
        <li>
          <NavLink to="/auth/google">Login with Google</NavLink>
        </li>
      </ul>
    </nav>
  );
};

function mapStateToProps({ authentication }) {
  return { authentication: authentication };
}

export default connect()(NavBar);
