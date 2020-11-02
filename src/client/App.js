import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// store
import { getSchools } from "./store/store";

//components
import Login from "./components/auth/Login";

const App = () => {
  // map dispatch
  const dispatch = useDispatch();

  // componentdidmount
  useEffect(() => {
    // load data
    dispatch(getSchools());
  });

  // mapstate
  const schools = useSelector(({ schools }) => schools);

  return (
    <HashRouter>
      <Route path="/" component={Login} />
    </HashRouter>
  );
};

export default App;
