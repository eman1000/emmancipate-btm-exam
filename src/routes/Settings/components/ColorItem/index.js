import React from "react";
// Import { browserHistory } from "react-router";
// Import PropTypes from "prop-types";
import styles from "./ColorItem.scss";


// Import AppNav from "../../../components/AppNav";
// Import { default as Header } from "../../../components/Header";
// Import {  default as CustomInput } from "../../../components/CustomInput";
// Import { default as Loader } from "../../../components/Loader";
// Import CompanyTab from "./CompanyTab";
// Import Followers from "./Followers";

// UTILS

// Import firebase from "../../../utils/firebase";

const ColorItem = ({obj, deleteColor, selectedColor})=>{
  return (
    <div className={`col-md-12 ${styles.colorItemContainer}`}>
      <div className="well">
        <div className="row">
          <div className="col-md-2">
            <span className={styles.text} style={{color:selectedColor}}>{obj.name}</span>
          </div>
          <div className="col-md-4">
            <span className={styles.text} style={{color:selectedColor}}>{obj.description}</span>
          </div>
          <div className="col-md-4">
            <span className={` ${obj.iconClass} ${styles.icon}`} style={{color:selectedColor}}/>
          </div>
          <div className="col-md-1"/>
          <div className="col-md-1">
            <span className={`fa fa-minus-circle ${styles.icon}`} style={{color:selectedColor}} onClick={()=>deleteColor(obj.id)}/>
          </div>
        </div>
      </div>
    </div>
  );

};
export default ColorItem;
