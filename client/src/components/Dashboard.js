import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/Dashboard.css";

const Dashboard = () => {
  return (
    <section className="Dashboard">
      <h4>I am the Dashboard component!</h4>
      <Outlet />
      <div className="button-container">
        <button>+</button>
      </div>
    </section>
  );
};

export default Dashboard;
