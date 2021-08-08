import React from 'react';
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";  // This package is available as it is a dependency of "react-router-dom"

import App from "./App";

const mount = (el, { defaultHistory, onNavigate, initialPath, onSignIn }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      if (history.location.pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector('#_auth-dev-root');
  if (el) {
    mount(el, {
      defaultHistory: createBrowserHistory(),
    });
  }
}

export { mount };
