import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

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

export const submitSurvey = (formValues, navigate) => {
  return async (dispatch) => {
    // Send formValues object (i.e. a completed survey) to backend in post request
    const response = await axios.post("/api/surveys", formValues);

    navigate("/surveys"); // Redirect user using React Router. See how SurveyFormReview component relates.

    // Backend server sends updated user model
    dispatch({ type: FETCH_USER, payload: response.data });
  };
};

export const fetchSurveys = () => {
  return async (dispatch) => {
    // Make request to backend API and dispatch action
    const response = await axios.get("/api/surveys");
    dispatch({ type: FETCH_SURVEYS, payload: response.data });
  };
};
