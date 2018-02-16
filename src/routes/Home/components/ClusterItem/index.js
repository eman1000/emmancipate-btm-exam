import React from "react";
import styles from "./ClusterItem.scss";

const ClusterItem = ({obj, selectedColor})=>{
  return (
    <div className={`col-md-4 ${styles.clusterItemContainer}`}>
      <div className="well">
        <span className={obj.iconClass} style={{color:selectedColor}}/>
        <h4 style={{color:selectedColor}}>{obj.name}</h4>
        <p style={{color:selectedColor}}>{obj.description}</p>
      </div>
    </div>
  );

};
export default ClusterItem;
