import React, { useState } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

// SurveyNew shows SurveyForm and SurveyFormReview
const SurveyNew = () => {
  const [visibility, setVisibility] = useState(false);

  // Toggle visibility specifically of SurveyFormReview component
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      {visibility ? (
        <SurveyFormReview toggle={toggleVisibility} />
      ) : (
        <SurveyForm toggle={toggleVisibility} />
      )}
    </>
  );
};

// Dump form values using reduxForm default behavior
// The SurveyNew component will clear form values once it gets unmounted. (However, form values will persist when toggling between SurveyForm and SurveyFormReview components.)
export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
