import { getJWT } from "./utils/axios";
import { DndProvider } from "react-dnd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

// store
import { login } from "./store/store";

// authenticated route
import AuthenticatedRoute from "./AuthenticatedRoute";

// components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

// authed components
import Home from "./components/dashboard/Home";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const jwt = getJWT();
    dispatch(login("", "", jwt));
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <HashRouter>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <AuthenticatedRoute exact={true} path="/home" component={Home} />
      </HashRouter>
    </DndProvider>
  );
};

export default App;
