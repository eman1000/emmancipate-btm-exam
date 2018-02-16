// LIBRARIES
import constants from "./actionConstants";
// Import axios from "axios";
// Import validate from "validate.js";
// Import { browserHistory } from "react-router";

// UTILS
import update from "react-addons-update";
// Import validation from "../../../utils/validation";



// ACTION CREATORS

// Get brand profile
// HandleValidation
function handleSetHomeColor(state, action) {
  return update(state, {
    selectedColor:{$set:action.payload}
  });
}


const ACTION_HANDLERS = {
  SET_HOME_COLOR:handleSetHomeColor
};
const initialState = {
  region:{},
  selectedColor:"##777"
};

export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];


  return handler ? handler(state, action) : state;
}
