// Import { createStore as _createStore, applyMiddleware, compose } from "redux";
// Import createMiddleware from "./middleware/clientMiddleware";
// Import { routerMiddleware } from "react-router-redux";
import * as reducers from "./reducers";
// Import Immutable from "immutable";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {browserHistory} from "react-router";
import {createLogger} from "redux-logger";
import {routerMiddleware} from "react-router-redux";


import thunk from "redux-thunk";

/** Export default function createStore(data) {
  // Sync dispatched route actions to the history
  // const reduxRouterMiddleware = routerMiddleware(history);

  // logger
  const log = createLogger({ diff: true, collapsed: true });

  // @diff line up firebase middleware
  const middleware = [thunk];

  if (!__DEVELOPMENT__) {
    middleware.push(log);
  }
  let finalCreateStore;
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { persistState } = require("redux-devtools");

    finalCreateStore = compose(
      applyMiddleware(...middleware),
      // window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }
  const reducer = combineReducers({...reducers});

  //if (data) {
  //data.pagination = Immutable.fromJS(data.pagination);
  //}
  const store = finalCreateStore(reducer, data);


  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(require("./reducers"));
    });
  }

  return store;
**/
const log =  createLogger({
  diff: true,
  collapsed: true
});
// Const env = window.__ENV__;
const middleware = [thunk, routerMiddleware(browserHistory)];

if (__DEVELOPMENT__) {
  middleware.push(log);
}
const initialState = {};
const reducer = combineReducers({...reducers});
const store   = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // Window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (__DEVELOPMENT__ && module.hot) {
  module.hot.accept("./reducers", () => {
    store.replaceReducer(require("./reducers"));
  });
}

export default store;
