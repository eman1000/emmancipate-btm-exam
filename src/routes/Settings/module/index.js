////////////////
//LIBRARIES
////////////////
import axios from "axios";
import constants from "./actionConstants";
import update from "react-addons-update";

// CONSTANTS
const {
  ADD_COLOR,
  DELETE_COLOR,
  GET_INPUT,
  GET_COLOR_LIST
} = constants;


///////////////////
//ACTION CREATORS
///////////////////


//get color input
export function getInput(payload){
  return {
    type:GET_INPUT,
    payload
  };
}

//add color
export function addColor() {
  return (dispatch, store) => {
    return axios.post("/api/color",{
      ...store().settings.userInput
    })
      .then((response)=>{
        dispatch({
          type:ADD_COLOR,
          payload:response.data
        });
      }).then(()=>{
        dispatch(getColorList());
      }).catch(function (error) {
        console.log(error);
      });
  };
}

//add color
export function deleteColor(id) {
  return (dispatch, store) => {
    return axios.delete(`/api/color/item/${id}`,{
      ...store().settings.userInput
    })
      .then((response)=>{
        dispatch({
          type:DELETE_COLOR,
          payload:response.data
        });
      }).then(()=>{
        dispatch(getColorList());
      }).catch(function (error) {
        console.log(error);
      });
  };
}

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

//ACTION HANDLERS
function handleAddColor(state, action){
  return update(state,{
    colorList:{
      $set:action.payload
    }
  });
}

function handleGetInput(state, action){
  const { key, value } = action.payload;
  return update(state,{
    userInput:{
      [key]:{
        $set:value
      }
    }
  });
}

function handleDeleteColor(state, action){
  return update(state,{
    deletedColor:{
      $set:action.payload
    }
  });
}

const ACTION_HANDLERS = {
  ADD_COLOR:handleAddColor,
  DELETE_COLOR:handleDeleteColor,
  GET_INPUT:handleGetInput
};
const initialState = {
  userInput:{},
  selectedColor:"##777"
};

export default function settingsReducer (state = initialState, action){
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}