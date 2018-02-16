
import Header from "../../../components/Header";
import React from "react";

import SettingsPanel from "./SettingsPanel";
import styles from "./Settings.scss";

class Settings extends React.Component{
  componentDidMount(){
    console.log(this.props.match.path);
  }
  render(){
    return (
      <div>
        <Header history={this.props.history} selectedColor={this.props.selectedColor} path={this.props.match.path}/>
        <SettingsPanel
          colorList={this.props.colorList}
          getInput={this.props.getInput}
          userInput={this.props.userInput}
          addColor={this.props.addColor}
          deleteColor={this.props.deleteColor}
          selectedColor={this.props.selectedColor}
        />
      </div>
    );
  }
}

export default Settings;
