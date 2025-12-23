import React from "react";

// SurveyFormReview shows users their form inputs for review
const SurveyFormReview = ({ toggle }) => {
  return (
    <section>
      <h4>Please confirm that all the information is correct.</h4>
      <button onClick={toggle}>Back</button>
    </section>
  );
};

export default SurveyFormReview;
