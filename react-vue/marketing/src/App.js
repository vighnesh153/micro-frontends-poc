import React from "react";
import {
  Switch,
  Router,   // This component is the base router for all routers (BrowserRouter, HashRouter).
            // If we provide a createBrowserHistory() to its history prop, it will act as BrowserRouter.
  Route
} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

// To avoid class name collision across multiple projects
const generateClassName = createGenerateClassName({
  productionPrefix: 'marketing-',
});

const App = (props) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={props.history}>
          <Switch>
            <Route exact path={'/pricing'} component={Pricing} />
            <Route path={'/'} component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
