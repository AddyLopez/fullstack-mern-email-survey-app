import React from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateRecipients from "../../utils/validateRecipients";
import formFields from "./formFields";
import "../../styles/SurveyForm.css";

// SurveyForm shows a form for a user to add input
const SurveyForm = ({ submitSurvey, initialValues }) => {
  const validate = (values) => {
    const errors = {};

    errors.recipients = validateRecipients(values.recipients || ""); // validateEmails function returns recipients' invalid email addresses, if any

    formFields.forEach(({ name, label }) => {
      if (!values[name]) {
        if (label === "Email Body") {
          errors[name] = `You must provide an ${label.toLowerCase()}.`;
          return;
        }
        errors[name] = `You must provide a ${label.toLowerCase()}.`;
      }
    });

    return errors;
  };

  const renderFields = () => {
    return (
      <section>
        {formFields.map(({ label, name }) => {
          return (
            <Field
              key={name}
              label={label}
              name={name}
              type="text"
              component={SurveyField}
            />
          );
        })}
      </section>
    );
  };

  // handleSubmit function is provided by reduxForm helper
  return (
    <div className="SurveyForm">
      <h3>NEW SURVEY</h3>
      <h4>
        Fill in the form to create a simple survey asking a yes-or-no question.
        List recipients' emails separated by a comma and a space. Select "Next"
        to review your answers.
      </h4>
      <div className="form-div">
        <Form
          initialValues={initialValues}
          onSubmit={submitSurvey}
          validate={validate}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              {renderFields()}
              <div className="form-buttons">
                <Link to="/surveys">CANCEL</Link>
                <button type="submit">NEXT</button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default SurveyForm;
