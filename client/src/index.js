import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers";

// Argument 1: reducer(s). Argument 2: initial state for server-side rendering. Argument 3 for middleware.
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const divElement = document.getElementById("root");
const root = ReactDOM.createRoot(divElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// console.log("Stripe Key is: ", process.env.REACT_APP_STRIPE_KEY);
// console.log("Environment is ", process.env.NODE_ENV);
