import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// store
import { getSchools } from "./store/store";

//components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {});

  return (
    <HashRouter>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </HashRouter>
  );
};

export default App;
