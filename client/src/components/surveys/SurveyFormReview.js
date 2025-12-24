import React from "react";
import { connect } from "react-redux";

// SurveyFormReview shows users their form inputs for review
const SurveyFormReview = ({ toggle, formValues }) => {
  return (
    <section>
      <h4>Please confirm that all the information is correct.</h4>
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
