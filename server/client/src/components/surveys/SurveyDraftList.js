import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchDrafts } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchDrafts();
  }

  renderDrafts() {
    return this.props.surveyDrafts.reverse().map(survey => {
      return (
        <div className="card blue-grey lighten-2" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Draft Saved On: {new Date(survey.dateSaved).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderDrafts()}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { surveyDrafts } = state;
  return { surveyDrafts };
}

export default connect(
  mapStateToProps,
  { fetchDrafts }
)(SurveyList);
