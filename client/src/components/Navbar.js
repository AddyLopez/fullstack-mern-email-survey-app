import { React, Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    // console.log(this.props);
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
  }
}

function mapStateToProps({ authentication }) {
  return { authentication };
}

export default connect(mapStateToProps)(NavBar);
