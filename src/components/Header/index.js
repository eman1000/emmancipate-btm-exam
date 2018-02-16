import { Link } from "react-router-dom";
import React from "react";
import styles from "./Header.scss";

export const Header = ({history, selectedColor, path}) => (

  <header className={styles.masthead} style={{backgroundColor:selectedColor}}>
    <div className="container h-100">
      <div className="row h-100">
        {
          path !== "/settings" &&
          <div className="col-lg-12 my-auto">
            <h1 className="mb-5">I  <i className="fa fa-heart"/> Color</h1>
            <p>Color really isn't that difficult to get right, if you know where to start</p>
            <p>Learn by doing and you'll be a master in no time.</p>
            <Link to="/signup" href="" className={`btn ${styles.btn}`} style={{backgroundColor:selectedColor}}>Over to you</Link>
          </div>
        }
        <div className="col-lg-5 my-auto">
          <div className="device-container"/>
        </div>
      </div>
    </div>
  </header>
);
export default Header;
