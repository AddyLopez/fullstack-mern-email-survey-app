import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

// SurveyForm shows a form for a user to add input
class SurveyForm extends Component {
  renderFields() {
    return (
      <section>
        <Field
          type="text"
          name="surveyTitle"
          label="Survey Title"
          component={SurveyField}
        />
        <Field
          type="text"
          name="surveySubject"
          label="Subject Line"
          component={SurveyField}
        />
        <Field
          type="text"
          name="surveyBody"
          label="Email Body"
          component={SurveyField}
        />
        <Field
          type="text"
          name="surveyRecipients"
          label="Recipient List"
          component={SurveyField}
        />
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
