import { React } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import Payments from "./Payments";
import "../styles/Navbar.css";

const NavBar = () => {
  const authentication = useSelector((state) => state.authentication);

  const renderContent = () => {
    switch (authentication) {
      case null:
        return null;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <>
            <p className="welcome">Welcome, {authentication.displayName}!</p>
            <p className="welcome">Credits: {authentication.credits}</p>
            <ul>
              <li>
                <Payments />
              </li>
              <li>
                <button>
                  <Link to="/surveys/new">CREATE SURVEY</Link>
                </button>
              </li>
              <li>
                <button>
                  <a href="/api/logout">LOG OUT</a>
                </button>
              </li>
            </ul>
          </>
        );
    }
  };

  return (
    <nav className="Navbar">
      <div>
        <NavLink className="logo" to={authentication ? "/surveys" : "/"}>
          Inquire
        </NavLink>
      </div>
      {renderContent()}
    </nav>
  );
};

export default NavBar;
