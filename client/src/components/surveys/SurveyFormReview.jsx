import React from "react";
import formFields from "./formFields";

import "../../styles/SurveyFormReview.css";

// SurveyFormReview shows users their form inputs for review
const SurveyFormReview = ({ toggle, formValues, submitSurvey }) => {
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
        <button onClick={() => submitSurvey()}>SEND SURVEY</button>
      </div>
    </section>
  );
};

export default SurveyFormReview;
