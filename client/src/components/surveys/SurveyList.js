import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions/index";

class SurveyList extends Component {
  // lifecycle method to call fetchSurveys action creator whenever component is rendered
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div key={survey._id}>
          <h4>{survey.title}</h4>
          <p>Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
          <p>Yes: {survey.yes}</p>
          <p>No: {survey.no}</p>
        </div>
      );
    });
  }

  render() {
    return <div className="SurveyList">{this.renderSurveys()}</div>;
  }
}

// Pull in the list of surveys
function mapStateToProps(state) {
  return { surveys: state.surveys }; // state.surveys is defined in src/reducers/index.js
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
