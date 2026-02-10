import { React, Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Payments from "./Payments";
import "../styles/Navbar.css";

class NavBar extends Component {
  renderContent() {
    switch (this.props.authentication) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <>
            <div className="welcome">
              <p>Welcome, {this.props.authentication.displayName}!</p>
            </div>
            <ul>
              <li key="1">
                <Payments />
              </li>
              <li key="2"> Credits: {this.props.authentication.credits}</li>
              <li key="3">
                <a href="/api/logout">Log out</a>
              </li>
            </ul>
          </>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav className="Navbar">
        <div>
          <NavLink
            className="logo"
            to={this.props.authentication ? "/surveys" : "/"}
          >
            Inquire
          </NavLink>
        </div>
        {this.renderContent()}
      </nav>
    );
  }
}

function mapStateToProps({ authentication }) {
  return { authentication };
}

export default connect(mapStateToProps)(NavBar);
