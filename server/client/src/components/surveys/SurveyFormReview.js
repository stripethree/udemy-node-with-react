import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import formFields from "./formFields";

const SurveyFormReviewComponent = ({ formValues, onCancel }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entires</h5>
      {reviewFields}
      <button className="yellow darken3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps)(SurveyFormReviewComponent);
