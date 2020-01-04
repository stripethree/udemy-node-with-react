//TODO: read course reference materials on reducers
import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authRedeucer from "./authReducer";
import surveysRedeucer from "./surveysReducer";
import surveyDraftsReducer from "./surveyDraftsReducer";

export default combineReducers({
  auth: authRedeucer,
  form: reduxForm,
  surveys: surveysRedeucer,
  surveyDrafts: surveyDraftsReducer
});
