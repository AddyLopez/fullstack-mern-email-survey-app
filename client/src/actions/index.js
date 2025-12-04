import axios from "axios";
import { FETCH_USER } from "./types";

// Redux action creator. It uses redux thunk. It dispatches the action after API responds.
export const fetchUser = () => {
  return async (dispatch) => {
    // Make request to backend API and dispatch action
    const response = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: response.data });
  };
};

export const handleToken = (token) => {
  return async (dispatch) => {
    // Post token from Stripe API
    const response = await axios.post("/api/stripe", token);

    // Backend server sends user model with updated number of credits
    dispatch({ type: FETCH_USER, payload: response.data });
  };
};
