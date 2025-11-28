import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

// dummy components
const Root = () => (
  <div>
    <h2>Header</h2>
    <Outlet />
  </div>
);
const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <Outlet />
  </div>
);
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Landing />} />
      <Route path="surveys" element={<Dashboard />}>
        <Route path="new" element={<SurveyNew />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
