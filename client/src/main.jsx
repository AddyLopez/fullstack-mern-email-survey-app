import "materialize-css/dist/css/materialize.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";

import App from "./components/App";
import axios from "axios";
window.axios = axios; // temporary code to test out back-end route

const divElement = document.getElementById("root");
const root = ReactDOM.createRoot(divElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
