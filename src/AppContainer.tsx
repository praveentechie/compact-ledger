import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from './home/HomePage';
import Setting from "./settings/Setting";

export default () => {
  return (
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/setting" component={Setting} />
    </Switch>
  );
}