import React from "react";
import { Outlet } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <section className="Dashboard">
      <SurveyList />
      <Outlet />
    </section>
  );
};

export default Dashboard;
