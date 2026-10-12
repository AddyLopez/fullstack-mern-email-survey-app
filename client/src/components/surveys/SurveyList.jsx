import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSurveys } from "../../actions/index";
import "../../styles/SurveyList.css";

const SurveyList = () => {
  const surveys = useSelector((state) => state.surveys);
  const dispatch = useDispatch();

  // dispatch and call fetchSurveys whenever dispatch dependency changes
  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

  const renderSurveys = () => {
    return surveys.reverse().map((survey) => {
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
  };

  return <div className="SurveyList">{renderSurveys()}</div>;
};

export default SurveyList;
