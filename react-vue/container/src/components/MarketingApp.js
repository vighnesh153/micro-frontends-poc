import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount } from "marketing/bootstrap";


const MarketingApp = () => {
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    const childOptions = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        if (history.location.pathname !== nextPathName) {
          // To avoid infinite loop
          history.push(nextPathName);
        }
      },
    });

    history.listen(childOptions.onParentNavigate);
  }, []);

  return (
    <div ref={ref} />
  );
};

export default MarketingApp;
