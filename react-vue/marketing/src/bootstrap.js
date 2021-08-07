import React from 'react';
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";  // This package is available as it is a dependency of "react-router-dom"

import App from "./App";

const mount = (el, options) => {
  const history = options.defaultHistory || createMemoryHistory();

  if (options.onNavigate) {
    history.listen(options.onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      if (history.location.pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector('#_marketing-dev-root');
  if (el) {
    mount(el, {
      defaultHistory: createBrowserHistory(),
    });
  }
}

export { mount };
