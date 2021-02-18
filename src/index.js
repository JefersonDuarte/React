"use strict";

import App from "./app";
import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

// var React = require('react')
// var ReactDOM = require('react-dom')

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
}

renderApp(App);

if (module.hot) {
  module.hot.accept("./app", () => {
    const NextApp = require("./app").default;
    renderApp(NextApp);
  });
}
