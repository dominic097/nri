import { PropTypes } from "prop-types";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { NRIHome } from "./scenes";
// import LoginForm from "./scenes/login/Login.container";
// import { PrivateRoute, NotFound404 } from "./components";

// PrivateRoute.propTypes = {
//   component: PropTypes.func
// };

const AppRoutes = (
  <Switch>
    <Route exact path="/" component={NRIHome} />
  </Switch>
);

export default AppRoutes;
