import React from "react";
import { connect } from "react-redux";

// SurveyFormReview shows users their form inputs for review
const SurveyFormReview = ({ toggle }) => {
  return (
    <section>
      <h4>Please confirm that all the information is correct.</h4>
      <button onClick={toggle}>Back</button>
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(SurveyFormReview);
