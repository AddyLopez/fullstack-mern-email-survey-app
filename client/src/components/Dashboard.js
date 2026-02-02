import React from "react";
import { Link, Outlet } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <section className="Dashboard">
      <SurveyList />
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
