import { React, Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  renderContent() {
    switch (this.props.authentication) {
      case null:
        return;
      case false:
        return (
          <li>
            <NavLink to="/auth/google">Login with Google</NavLink>
          </li>
        );
      default:
        // placeholder for now
        return (
          <li>
            <a>Log out</a>
          </li>
        );
    }
  }

  render() {
    // console.log(this.props);
    return (
      <nav>
        <a href="/">Inquire</a>
        <ul>
          <li>{this.renderContent()}</li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authentication }) {
  return { authentication };
}

export default connect(mapStateToProps)(NavBar);
