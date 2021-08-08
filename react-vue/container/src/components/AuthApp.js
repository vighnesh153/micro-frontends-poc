import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount } from "auth/bootstrap";


const AuthApp = ({ onSignIn }) => {
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    const childOptions = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        if (history.location.pathname !== nextPathName) {
          // To avoid infinite loop
          history.push(nextPathName);
        }
      },
      onSignIn,
    });

    history.listen(childOptions.onParentNavigate);
  }, []);

  return (
    <div ref={ref} />
  );
};

export default AuthApp;
