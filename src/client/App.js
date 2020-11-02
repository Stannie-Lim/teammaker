import React, { useState, useEffect } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// authenticated route
import AuthenticatedRoute from "./AuthenticatedRoute";

// components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

// authed components
import Home from "./components/dashboard/Home";

const App = () => {
  const isLoggedIn = useSelector(({ user }) => !!user.id);

  return (
    <HashRouter>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <AuthenticatedRoute
        isLoggedIn={isLoggedIn}
        exact={true}
        path="/home"
        component={Home}
      />
    </HashRouter>
  );
};

export default App;
