import { Redirect } from "react-router-dom";
import React from "react";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Redirect to={{
          pathname: "/home"
        }}
        />
        <h1>404 Page not found!</h1>
      </div>
    );
  }
}

export default NotFound;
