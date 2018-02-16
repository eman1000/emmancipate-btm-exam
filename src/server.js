import * as reducers from "./redux/reducers";
import {Provider} from "react-redux";
// Import ReactDOM from "react-dom/server";
import {StaticRouter} from "react-router";
import {combineReducers, createStore} from "redux";
import {matchRoutes} from "react-router-config";
import {renderToString} from "react-dom/server";
import App from "./App/container/AppContainer";
// Import store from "./redux/create";
import Express from "express";
import Html from "./helpers/Html";

// Import ApiClient from "./helpers/ApiClient";
import React from "react";
// Import PrettyError from "pretty-error";
import axios from "axios";

// Import { match } from "react-router";
import compression from "compression";
import config from "./config";
import favicon from "serve-favicon";
// Import { /** createStore, **/ combineReducers } from "redux";

import getRoutes from "./routes";
// Import { syncHistoryWithStore } from "react-router-redux";
// Import { ReduxAsyncConnect, loadOnServer } from "redux-async-connect";
// Import createHistory from "react-router/lib/createMemoryHistory";
import http from "http";
import httpProxy from "http-proxy";

import path from "path";


const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
// Const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});

app.use(compression());
app.use(favicon(path.join(__dirname, "..", "static", "favicon.ico")));

app.use(Express.static(path.join(__dirname, "..", "static")));

// Proxy to API server
app.use("/api", (req, res) => {
  proxy.web(req, res, {target: targetUrl});
});

app.use("/ws", (req, res) => {
  proxy.web(req, res, {target: `${targetUrl}/ws`});
});

server.on("upgrade", (req, socket, head) => {
  proxy.ws(req, socket, head);
});

// Added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on("error", (error, req, res) => {
  let json;

  if (error.code !== "ECONNRESET") {
    console.error("proxy error", error);
  }
  if (!res.headersSent) {
    res.writeHead(500, {"content-type": "application/json"});
  }

  json = {
    error: "proxy_error",
    reason: error.message
  };
  res.end(JSON.stringify(json));
});

app.use((req, res) => {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // Hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }
  // Const client = new ApiClient(req);
  // Const memoryHistory = createHistory(req.originalUrl);
  const reducer  = combineReducers({...reducers});
  const defaultState = {};
  const store = createStore(reducer, defaultState);
  // Const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send(`<!doctype html>\n${
      renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store}/>)}`);
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();

    return;
  }

  /** Match({ history, routes: getRoutes(store), location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error("ROUTER ERROR:", pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      loadOnServer({...renderProps, store, helpers: {client}}).then(() => {
        const component = (
          <Provider store={store} key="provider">
            <ReduxAsyncConnect {...renderProps} />
          </Provider>
        );

        res.status(200);

        global.navigator = {userAgent: req.headers["user-agent"]};

        res.send("<!doctype html>\n" +
          renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store}/>));
      });
    } else {
      res.status(404).send("Not found");
    }
  });
  **/

  const branch = matchRoutes(getRoutes, req.url);

  branch.map(({route}) => {
    const fetchData = route.loadData ? route.loadData : Promise.resolve("Nothing to show");

    axios.all(Array.from(fetchData))
      .then(axios.spread(() => {
        // Const reducer = combineReducers({...reducers});
        // Default state to hydrate the store
        // Const defaultState = {};
        // Const store = createStore(reducer,  defaultState);
        const context = {};
        const component = (
          <Provider store={store}>
            <StaticRouter
              location={req.url}
              context={context}
            >
              <App/>
            </StaticRouter>
          </Provider>
        );
        // Const initialState = store.getState();
        // Const componentHTML = renderToString(InitialComponent);
        // Const helmet = Helmet.renderStatic();

        res.send(`<!doctype html>\n${
          renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store}/>)}`);
      }))
      .catch(error => {
        console.log(error);
      });
  });
});

if (config.port) {
  server.listen(config.port, err => {
    if (err) {
      console.error(err);
    }
    console.info("----\n==> ✅  %s is running, talking to API server on %s.", config.app.title, config.apiPort);
    console.info("==> 💻  Open http://%s:%s in a browser to view the app.", config.host, config.port);
  });
} else {
  console.error("==>     ERROR: No PORT environment variable has been specified");
}
