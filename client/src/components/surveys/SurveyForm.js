import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

// SurveyForm shows a form for a user to add input
class SurveyForm extends Component {
  // handleSubmit function is provided by reduxForm helper
  render() {
    return (
      <>
        <p>I am the SurveyForm component!</p>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          <Field type="text" name="surveyTitle" component="input" />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
