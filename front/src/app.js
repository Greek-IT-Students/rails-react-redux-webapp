import React from "react";
import "babel-polyfill";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import createStore from "./redux/createStore";
import routes from "routes";
import "index.css";
const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
}
