/*jshint esversion: 6 */
import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  leads: leads,
  errors: errors,
  messages: messages
});
