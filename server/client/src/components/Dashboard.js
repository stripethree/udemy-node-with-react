import React from "react";
import { Link } from "react-router-dom";

import SurveyList from "./surveys/SurveyList";
import SurveyDraftList from "./surveys/SurveyDraftList";

const Dashboard = () => {
  return (
    <div>
      <SurveyDraftList />
      <SurveyList />
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/surveys/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
