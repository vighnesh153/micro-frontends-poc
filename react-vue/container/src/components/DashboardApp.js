import React, { useRef, useEffect } from "react";

import { mount } from "dashboard/bootstrap";


const AuthApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current)
  }, []);

  return (
    <div ref={ref} />
  );
};

export default AuthApp;
