import { FETCH_SURVEYS } from "../actions/types";
// This reducer's purpose is to wait for the FETCH_SURVEYS action type and return the list of the current user's surveys.

// Initialize surveys' slice of state to an empty array by default when application boots up.
const surveysReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
};

export default surveysReducer;
