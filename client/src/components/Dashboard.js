import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section>
      <h4>I am the Dashboard component!</h4>
      <Outlet />
    </section>
  );
};

export default Dashboard;
