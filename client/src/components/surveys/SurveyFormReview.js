import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";

// SurveyFormReview shows users their form inputs for review
const SurveyFormReview = ({ toggle, formValues }) => {
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
    </section>
  );
};

// Extract form's values from state object to pass as props for display on review screen
const mapStateToProps = (state) => {
  return {
    formValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps)(SurveyFormReview);
