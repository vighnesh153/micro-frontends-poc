import React, {Suspense, useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = React.lazy(() => import('./components/MarketingApp'));
const AuthLazy = React.lazy(() => import('./components/AuthApp'));

// To avoid class name collision across multiple projects
const generateClassName = createGenerateClassName({
  productionPrefix: 'container-',
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isLoggedIn={isLoggedIn} onSignOut={() => setIsLoggedIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path={'/auth'}>
                <AuthLazy onSignIn={() => setIsLoggedIn(true)} />
              </Route>
              <Route path={'/'} component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
