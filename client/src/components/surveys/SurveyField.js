import React from "react";

// SurveyField contains logic to render a single text label and input
const SurveyField = ({ input }) => {
  return (
    <input {...input} />
  ); /*Spread syntax adds all of input's properties as JSX props without having to be enumerated and named one by one*/
};

export default SurveyField;
