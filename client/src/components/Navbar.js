import { React, Component } from "react";
import { NavLink, Link } from "react-router-dom";
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
              <p>
                Welcome, {this.props.authentication.displayName}! You have{" "}
                {this.props.authentication.credits} credits.
              </p>
            </div>
            <ul>
              <li>
                <Payments />
              </li>
              <li>
                <button>
                  <Link to="/surveys/new">Create Survey</Link>
                </button>
              </li>
              <li>
                <button>
                  <a href="/api/logout">Log Out</a>
                </button>
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
