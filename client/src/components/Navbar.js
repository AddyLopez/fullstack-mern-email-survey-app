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
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        // placeholder for now
        return (
          <li>
            <a href="/api/logout">Log out</a>
          </li>
        );
    }
  }

  render() {
    // console.log(this.props);
    return (
      <nav>
        <NavLink to={this.props.authentication ? "/surveys" : "/"}>
          Inquire
        </NavLink>
        <ul>{this.renderContent()}</ul>
      </nav>
    );
  }
}

function mapStateToProps({ authentication }) {
  return { authentication };
}

export default connect(mapStateToProps)(NavBar);
