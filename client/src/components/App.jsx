import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../store/slices/authenticationSlice";

import Root from "./Root";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Landing />} />
            <Route path="/surveys" element={<Dashboard />} />
            <Route path="/surveys/new" element={<SurveyNew />} />
            <Route path="/api/stripe/success" element={<Dashboard />} />
            <Route path="/api/stripe/cancel" element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
