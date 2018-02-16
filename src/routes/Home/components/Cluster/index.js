import ClusterItem from "../ClusterItem";
import React from "react";
import styles from "./Cluster.scss";

const Cluster = ({colorList, selectedColor})=>{
  return (
    <section className={styles.clusterContainer}>
      <div className="container">
        <div className="row">
          { colorList && colorList.slice(0, 3).map((obj, index)=>(
            <ClusterItem obj={obj} key={index} selectedColor={selectedColor}/>
          ))
          }
        </div>
      </div>
    </section>
  );

};
export default Cluster;
