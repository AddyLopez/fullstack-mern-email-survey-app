import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { useNavigate } from "react-router-dom";
import * as actions from "../../actions/index"; // import all action creators
import "../../styles/SurveyFormReview.css";

// SurveyFormReview shows users their form inputs for review
const SurveyFormReview = ({ toggle, formValues, submitSurvey }) => {
  const navigate = useNavigate();

  const reviewFormFields = formFields.map((formField) => {
    return (
      <section key={formField.name}>
        <label>{formField.label.toUpperCase()}</label>
        <p>{formValues[formField.name]}</p>
      </section>
    );
  });

  return (
    <section className="SurveyFormReview">
      <h3>REVIEW & CONFIRM ENTRIES</h3>
      <h4>
        Please confirm that all the information is correct. Select "go back" to
        edit. Once certain, send the survey.
      </h4>
      <div className="reviewfields-div">{reviewFormFields}</div>
      <div className="formreview-buttons">
        <button onClick={toggle}>GO BACK</button>
        <button onClick={() => submitSurvey(formValues, navigate)}>
          SEND SURVEY
        </button>
      </div>
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
