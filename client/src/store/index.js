import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./slices/authenticationSlice";
import surveysReducer from "./surveysSlice";

// keys inside state object
export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    surveys: surveysReducer,
  },
});
