/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import "babel-polyfill";
import {BrowserRouter} from "react-router-dom";

import {Provider} from "react-redux";
import {render} from "react-dom";
import App from "./App/container/AppContainer";

// Import createStore from "./redux/create";


// Import ApiClient from "./helpers/ApiClient";

import React from "react";
import io from "socket.io-client";
// Import { /** Router,**/ browserHistory } from "react-router";
// Import { syncHistoryWithStore } from "react-router-redux";
// Import { ReduxAsyncConnect } from "redux-async-connect";
// Import useScroll from "scroll-behavior/lib/useStandardScroll";

// Import getRoutes from "./routes";
import store from "./redux/create";


// Const client = new ApiClient();
// Const _browserHistory = useScroll(() => browserHistory)();
const dest = document.getElementById("content");
// @diff param
// Const store = createStore(window.__data);
// Const history = syncHistoryWithStore(_browserHistory, store);

function initSocket() {
  const socket = io("", {path: "/ws"});

  socket.on("news", data => {
    console.log(data);
    socket.emit("my other event", {my: "data from client"});
  });
  socket.on("msg", data => {
    console.log(data);
  });

  return socket;
}

global.socket = initSocket();

const component = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
);

if (process.env.NODE_ENV !== "production") {
  window.React = React; // Enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes["data-react-checksum"]) {
    console.error("Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.");
  }
}


if (__DEVTOOLS__ && !window.devToolsExtension) {
  render(
    <Provider store={store} key="provider">
      <div>
        {component}
      </div>
    </Provider>,
    dest
  );
}
