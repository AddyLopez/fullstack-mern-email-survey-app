import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { submitSurvey } from "../../store/slices/surveysSlice";
import { fetchUser } from "../../store/slices/authenticationSlice";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

// SurveyNew shows SurveyForm and SurveyFormReview
const SurveyNew = () => {
  const [visibility, setVisibility] = useState(false); // To toggle visibility  of SurveyFormReview component
  const [formValues, setFormValues] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    setFormValues(values);
    setVisibility(true);
  };

  const handleSurveySubmit = async () => {
    await dispatch(submitSurvey({ formValues: formValues, navigate }));
    dispatch(fetchUser());
  };

  return (
    <>
      {visibility ? (
        <SurveyFormReview
          toggle={() => setVisibility(false)}
          formValues={formValues}
          submitSurvey={handleSurveySubmit}
        />
      ) : (
        <SurveyForm
          submitSurvey={handleFormSubmit}
          initialValues={formValues}
        />
      )}
    </>
  );
};

export default SurveyNew;
