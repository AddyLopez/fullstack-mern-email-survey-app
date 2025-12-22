import React, { useState } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

// SurveyNew shows SurveyForm and SurveyFormReview
const SurveyNew = () => {
  const [visibility, setVisibility] = useState(false);

  // Toggle visibility specifically of SurveyFormReview component
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return <>{visibility ? <SurveyFormReview /> : <SurveyForm />}</>;
};

export default SurveyNew;
