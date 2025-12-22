import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <section className="Dashboard">
      <h4>I am the Dashboard component!</h4>
      <Outlet />
      <div className="button-container">
        <Link to="/surveys/new" className="button-plus">
          +
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
