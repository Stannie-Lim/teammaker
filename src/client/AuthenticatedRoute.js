import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthenticatedRoute = ({ isLoggedIn, component, path, exact }) => {
  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Route exact={exact} path={path} component={component} />;
};

export default AuthenticatedRoute;
