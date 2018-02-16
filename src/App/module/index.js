// LIBRARIES
import axios from "axios";
import constants from "./actionConstants";
// Import axios from "axios";
// Import validate from "validate.js";
// Import { browserHistory } from "react-router";

// UTILS
import update from "react-addons-update";
// Import validation from "../../../utils/validation";

// CONSTANTS
const {
  GET_COLOR_LIST,
  TOGGLE_LOADING,
  SET_COLOR,
  SET_HOME_COLOR
} = constants;


// get the list of all colors
export function getColorList() {
  return (dispatch, store) => {
    return axios.get("/api/color/list")
      .then((response)=>{
        dispatch({
          type:GET_COLOR_LIST,
          payload:response.data
        });
      }).catch(function (error) {
        console.log(error);
      });
  };
}

//set color
export function setColor(payload) {
  return (dispatch)=>{
    dispatch({
      type:SET_COLOR,
      payload
    });
    dispatch({
      type:SET_HOME_COLOR,
      payload
    });
  };
}

// Toggle loading
export function toggleLoading(payload) {
  return (dispatch, store) => {
    dispatch({
      type:TOGGLE_LOADING,
      payload
    });
  };
}

//ACTION HANDLERS
function handleGetColorList(state, action){
  return update(state,{
    colorList:{
      $set:action.payload
    }
  });
}

function handleSetColor(state, action){
  return update(state,{
    selectedColor:{
      $set:action.payload
    }
  });
}

const ACTION_HANDLERS = {
  GET_COLOR_LIST:handleGetColorList,
  SET_COLOR:handleSetColor
};
const initialState = {
  selectedColor:"##777"
};

export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];


  return handler ? handler(state, action) : state;
}
