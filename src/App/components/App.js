import { Link } from "react-router-dom";
import {Route, Switch} from "react-router";
import Helmet from "react-helmet";
import MenuItem from "react-bootstrap/lib/MenuItem";
import Nav from "react-bootstrap/lib/Nav";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import Navbar from "react-bootstrap/lib/Navbar";
import React, { Component } from "react";
import config from "../../../src/config";
import routes from "../../routes";
import styles from "./App.scss";

class App extends Component {

  componentDidMount(){
    this.props.getColorList();
  }

  render() {
    const { selectedColor, history } = this.props;
    return (
      <div className={styles.appContainer}>
        <Helmet {...config.app.head}/>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/home" activeStyle={{color: "#33e0ff"}}>
                <div className={styles.brand}/>
                <span className="fa fa-rocket" style={{color:selectedColor,fontSize:20}}/>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar pullRight>
              {
                this.props.colorList && this.props.colorList.map((obj, index)=>{
                  return (
                    <li key={index}>
                      <a className={styles.link} onClick={()=>this.props.setColor(obj.name)}>{obj.name}</a>
                    </li>
                  );
                }
                )
              }
              <NavDropdown eventKey={1}
                title={"Settings"}
              >
                <MenuItem eventKey={1.1} onClick={()=>history.push("/settings")}>Manage</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          {
            routes.map((route, index) => (
              <Route key={index} {...route}/>
            ))
          }
        </Switch>
      </div>
    );
  }
}

export default App;
