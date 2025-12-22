import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

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
        {FIELDS.map((field, index) => {
          return (
            <Field
              key={index}
              label={field.label}
              name={field.name}
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
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
