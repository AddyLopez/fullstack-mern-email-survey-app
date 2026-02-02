import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions/index";

class SurveyList extends Component {
  // lifecycle method to call fetchSurveys action creator whenever component is rendered
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return <h4>I am the SurveyList component!</h4>;
  }
}

// Pull in the list of surveys
function mapStateToProps(state) {
  return { surveys: state.surveys }; // state.surveys is defined in src/reducers/index.js
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
