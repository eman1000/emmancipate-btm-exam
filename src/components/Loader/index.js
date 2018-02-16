import React from "react";
import "./Loader.scss";
// Import { IndexLink, Link } from "react-router";
import LoaderImg from "./assets/animated_loading.gif";
export const Loader = () => (
  <div className="loader">
    <img src={LoaderImg}/>
  </div>
);
export default Loader;
