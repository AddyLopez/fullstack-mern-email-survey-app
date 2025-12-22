import React from "react";

// SurveyField contains logic to render a single text label and input
const SurveyField = ({ input, label, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {meta.error}
    </div>
  );
};

export default SurveyField;
