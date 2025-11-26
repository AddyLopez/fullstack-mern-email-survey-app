import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";

// Argument 1: reducer(s). Argument 2: initial state for server-side rendering. Argument 3 for middleware.
const store = createStore(() => [], {}, applyMiddleware());

const divElement = document.getElementById("root");
const root = ReactDOM.createRoot(divElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
