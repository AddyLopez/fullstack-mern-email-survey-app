import React from "react";

// SurveyField contains logic to render a single text label and input
const SurveyField = ({ input, label, meta }) => {
  console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};

export default SurveyField;
