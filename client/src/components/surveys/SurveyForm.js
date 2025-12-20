import React, { Component } from "react";
import { reduxForm } from "redux-form";

// SurveyForm shows a form for a user to add input
class SurveyForm extends Component {
  render() {
    return <p>I am the SurveyForm component!</p>;
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
