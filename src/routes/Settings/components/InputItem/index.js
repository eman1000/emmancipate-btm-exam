import React from "react";
// Import { browserHistory } from "react-router";
// Import PropTypes from "prop-types";
import styles from "./inputItem.scss";


// Import AppNav from "../../../components/AppNav";
// Import { default as Header } from "../../../components/Header";
// Import {  default as CustomInput } from "../../../components/CustomInput";
// Import { default as Loader } from "../../../components/Loader";
// Import CompanyTab from "./CompanyTab";
// Import Followers from "./Followers";

// UTILS

// Import firebase from "../../../utils/firebase";

const InputItem = ({getInput, userInput, addColor, selectedColor})=>{
  return (
    <div className={`col-md-12 ${styles.inputItemContainer}`}>
      <div className="well">
        <div className="row">
          <div className="col-md-3">
            <input className="form-control" placeholder="Color" onChange={(ev)=>getInput({
              key:"name",
              value:ev.target.value
            })}
            value={userInput.name || ""}
            />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Description" onChange={(ev)=>getInput({
              key:"description",
              value:ev.target.value
            })}
            value={userInput.description || ""}
            />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Icon" onChange={(ev)=>getInput({
              key:"iconClass",
              value:ev.target.value
            })}
            value={userInput.iconClass || ""}
            />
          </div>
          <div className="col-md-2"/>
          <div className="col-md-1">
            <span className={`fa fa-plus-circle ${styles.icon}`} style={{color:selectedColor}} onClick={()=>addColor()} />
          </div>
        </div>
      </div>
    </div>
  );

};
export default InputItem;
