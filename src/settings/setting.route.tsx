import React from "react";
import { Route, Switch } from "react-router-dom";

import Contact from './contact/Contact';
import Dashboard from './dashboard/Dashboard';

const SettingRoute = () => {
  return (
    <Switch>
      <Route exact path="/setting" component={Dashboard} />
      <Route path="/setting/account" component={Dashboard} />
      <Route path="/setting/contact" component={Contact} />
    </Switch>
  );
};

export default SettingRoute;