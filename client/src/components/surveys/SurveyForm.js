import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateRecipients from "../../utils/validateRecipients";

const FIELDS = [
  {
    label: "Survey Title",
    name: "surveyTitle",
  },
  {
    label: "Subject Line",
    name: "surveySubject",
  },
  {
    label: "Email Body",
    name: "surveyBody",
  },
  {
    label: "Recipient List",
    name: "surveyRecipients",
  },
];

// SurveyForm shows a form for a user to add input
class SurveyForm extends Component {
  renderFields() {
    return (
      <section>
        {FIELDS.map(({ label, name }, index) => {
          return (
            <Field
              key={index}
              label={label}
              name={name}
              type="text"
              component={SurveyField}
            />
          );
        })}
      </section>
    );
  }

  // handleSubmit function is provided by reduxForm helper
  render() {
    return (
      <>
        <p>I am the SurveyForm component!</p>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <Link to="/surveys">Cancel</Link>
          <button type="submit">Next</button>
        </form>
      </>
    );
  }
}

function validate(values) {
  const errors = {};

  FIELDS.forEach(({ name, label }) => {
    if (!values[name]) {
      if (label === "Email Body") {
        errors[name] = `You must provide an ${label.toLowerCase()}`;
        return;
      }
      errors[name] = `You must provide a ${label.toLowerCase()}.`;
    }
  });

  errors.recipients = validateRecipients(values.recipients || ""); // ValidateEmails returns recipients' invalid email addresses

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "surveyForm",
})(SurveyForm);
