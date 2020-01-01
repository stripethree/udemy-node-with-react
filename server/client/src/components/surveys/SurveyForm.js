import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";

const FIELDS = [
  {
    label: "Survey Title",
    name: "title"
  },
  {
    label: "Subject Line",
    name: "subject"
  },
  {
    label: "Body",
    name: "body"
  },
  {
    label: "Recipient List",
    name: "emails"
  }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          label={label}
          name={name}
          type="text"
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link className="red btn-flat white-text" to="/surveys">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}.`;
    }
  });

  return errors;
}

export default reduxForm({
  form: "surveyForm",
  validate
})(SurveyForm);
