//TODO: read course reference materials on reducers

import { combineReducers } from "redux";
import authRedeucer from "./authReducer";

export default combineReducers({
  auth: authRedeucer
});
