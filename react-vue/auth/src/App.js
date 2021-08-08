import React from "react";
import {
  Switch,
  Router,   // This component is the base router for all routers (BrowserRouter, HashRouter).
            // If we provide a createBrowserHistory() to its history prop, it will act as BrowserRouter.
  Route
} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

// To avoid class name collision across multiple projects
const generateClassName = createGenerateClassName({
  productionPrefix: 'auth-',
});

const App = (props) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={props.history}>
          <Switch>
            <Route path={'/auth/signin'}>
              <Signin onSignIn={props.onSignIn} />
            </Route>
            <Route path={'/auth/signup'}>
              <Signup onSignIn={props.onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
