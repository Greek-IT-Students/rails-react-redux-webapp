import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import publicContent from "./appPublicContent";
import { default as App } from "./app";
import registerServiceWorker from "registerServiceWorker";
ReactDOM.render(
  <App publicContent={publicContent} />,
  document.getElementById("root") // eslint-disable-line
);

registerServiceWorker();
