import axios from "axios";
import { FETCH_USER } from "./types";

// Redux action creator. It uses redux thunk. It dispatches the action after API responds.
export const fetchUser = () => {
  return function (dispatch) {
    // Make request to backend API
    axios
      .get("/api/current_user")
      .then((response) => dispatch({ type: FETCH_USER, payload: response }));
  };
};
