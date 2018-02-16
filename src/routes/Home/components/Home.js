import React from "react";

import "./Home.scss";
import Cluster from "./Cluster";
import Header from "../../../components/Header";

class Home extends React.Component {
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Header history={this.props.history} selectedColor={this.props.selectedColor} path={this.props.match.path}/>
        <Cluster colorList={this.props.colorList} selectedColor={this.props.selectedColor}/>
      </div>
    );
  }
}

export default Home;
