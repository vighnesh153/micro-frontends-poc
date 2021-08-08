import React, { Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = React.lazy(() => import('./components/MarketingApp'));
const AuthLazy = React.lazy(() => import('./components/AuthApp'));
const DashboardLazy = React.lazy(() => import('./components/DashboardApp'));

// To avoid class name collision across multiple projects
const generateClassName = createGenerateClassName({
  productionPrefix: 'container-',
});

const history = createBrowserHistory();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/dashboard');
    }
  }, [isLoggedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isLoggedIn={isLoggedIn} onSignOut={() => setIsLoggedIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path={'/auth'}>
                <AuthLazy onSignIn={() => setIsLoggedIn(true)} />
              </Route>
              <Route path={'/dashboard'}>
                {!isLoggedIn && <Redirect to={'/'} />}
                <DashboardLazy />
              </Route>
              <Route path={'/'} component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
