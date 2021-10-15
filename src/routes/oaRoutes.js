import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Dashboard from "../pages/dashboard/dashboard";
import Home from "../pages/home/home";

const routes = [
  {
    component: () => <Home />,
    exact: true,
    path: "/home",
    protectedRoute: true,
  },
  {
    component: () => <Dashboard />,
    exact: true,
    path: "/dashboard",
    protectedRoute: true,
  },
];

const OASidebar = () => {
  return (
    <Switch>
      <Redirect push from="/" to="/home" exact />
      {routes.map((route, index) => (
        <Route key={index} {...route} protectedRoute={route.protectedRoute} />
      ))}
    </Switch>
  );
};

export default OASidebar;
