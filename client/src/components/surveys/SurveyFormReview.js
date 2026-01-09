import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { useNavigate } from "react-router-dom";
import * as actions from "../../actions/index"; // import all action creators

// SurveyFormReview shows users their form inputs for review
const SurveyFormReview = ({ toggle, formValues, submitSurvey }) => {
  const navigate = useNavigate();

  const reviewFormFields = formFields.map((formField) => {
    return (
      <section key={formField.name}>
        <div>
          <label>{formField.label}</label>
          <p>{formValues[formField.name]}</p>
        </div>
      </section>
    );
  });

  return (
    <section>
      <h4>Please confirm that all the information is correct.</h4>
      {reviewFormFields}
      <button onClick={toggle}>Back</button>
      <button onClick={() => submitSurvey(formValues, navigate)}>
        Send Survey
      </button>
    </section>
  );
};

// Extract form's values from state object to pass as props for display on review screen
const mapStateToProps = (state) => {
  return {
    formValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps, actions)(SurveyFormReview);
