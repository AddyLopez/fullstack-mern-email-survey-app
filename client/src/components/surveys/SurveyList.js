import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions/index";
import "../../styles/SurveyList.css";

class SurveyList extends Component {
  // lifecycle method to call fetchSurveys action creator whenever component is rendered
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div key={survey._id} className="survey">
          <section>
            <h4>SURVEY TITLE</h4>
            <p>{survey.title}</p>
          </section>
          <section>
            <h4>SENT ON</h4>
            <p>{new Date(survey.dateSent).toLocaleDateString()}</p>
          </section>
          <section className="border">
            <h4>EMAIL BODY</h4>
            <p>{survey.body}</p>
          </section>
          <section className="border">
            <h4>RESPONSES TO DATE</h4>
            <div className="responses">
              <p>
                <span>Yes: </span>
                {survey.yes}
              </p>
              <p>
                <span>No: </span>
                {survey.no}
              </p>
            </div>
          </section>
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
