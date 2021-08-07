import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

// To avoid class name collision across multiple projects
const generateClassName = createGenerateClassName({
  productionPrefix: 'container-',
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
