import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateRecipients from "../../utils/validateRecipients";
import formFields from "./formFields";
import "../../styles/SurveyForm.css";

// SurveyForm shows a form for a user to add input
class SurveyForm extends Component {
  renderFields() {
    return (
      <section>
        {formFields.map(({ label, name }, index) => {
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
      <div className="SurveyForm">
        <h3>NEW SURVEY</h3>
        <h4>
          Fill in the form to create a survey. Select "Next" to review your
          answers.
        </h4>
        <div className="form-div">
          <form onSubmit={this.props.handleSubmit(this.props.toggle)}>
            {this.renderFields()}
            <div className="form-buttons">
              <Link to="/surveys">CANCEL</Link>
              <button type="submit">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateRecipients(values.recipients || ""); // validateEmails function returns recipients' invalid email addresses, if any

  formFields.forEach(({ name, label }) => {
    if (!values[name]) {
      if (label === "Email Body") {
        errors[name] = `You must provide an ${label.toLowerCase()}`;
        return;
      }
      errors[name] = `You must provide a ${label.toLowerCase()}.`;
    }
  });

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
