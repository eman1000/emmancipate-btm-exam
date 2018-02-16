// Import { browserHistory } from "react-router";
// Import PropTypes from "prop-types";
import ColorItem from "../ColorItem";
import InputItem from "../InputItem";


import React from "react";
import styles from "./SettingsPanel.scss";

// Import AppNav from "../../../components/AppNav";
// Import { default as Header } from "../../../components/Header";
// Import {  default as CustomInput } from "../../../components/CustomInput";
// Import { default as Loader } from "../../../components/Loader";
// Import CompanyTab from "./CompanyTab";
// Import Followers from "./Followers";

// UTILS

// Import firebase from "../../../utils/firebase";

const SettingsPanel = ({colorList, selectedColor, getInput, userInput, addColor, deleteColor})=>{
  return (
    <section className={styles.settingsPanelContainer}>
      <div className="container">
        <div className="row" >
          <InputItem getInput={getInput} userInput={userInput} addColor={addColor} selectedColor={selectedColor}/>
          {
            colorList && colorList.map((obj, index)=>(
              <ColorItem obj={obj} deleteColor={deleteColor} selectedColor={selectedColor}/>
            ))
          }
        </div>
      </div>
    </section>
  );

};
export default SettingsPanel;
