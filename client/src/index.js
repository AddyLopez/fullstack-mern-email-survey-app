import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers";
import axios from "axios";
window.axios = axios; // temporary code to test out back-end route

// Argument 1: reducer(s). Argument 2: initial state for server-side rendering. Argument 3 for middleware.
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const divElement = document.getElementById("root");
const root = ReactDOM.createRoot(divElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
