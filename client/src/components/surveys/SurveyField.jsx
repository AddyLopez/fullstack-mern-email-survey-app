import React from "react";
import "../../styles/SurveyField.css";

// SurveyField contains logic to render a single text label and input
const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="SurveyField">
      <label>{label.toUpperCase()} </label>
      <br />
      <input {...input} />
      <div className="error">{touched && error}</div>
    </div>
  );
};

export default SurveyField;
