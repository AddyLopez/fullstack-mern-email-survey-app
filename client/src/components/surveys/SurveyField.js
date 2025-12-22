import React from "react";

// SurveyField contains logic to render a single text label and input
const SurveyField = ({ input, label }) => {
  return (
    <>
      <label>{label}</label>
      <input {...input} />;
    </>
  );
};

export default SurveyField;
