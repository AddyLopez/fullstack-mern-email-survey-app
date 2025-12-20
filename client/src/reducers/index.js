import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authenticationReducer from "./authenticationReducer";

export default combineReducers({
  // keys inside state object
  authentication: authenticationReducer,
  form: reduxForm,
});
