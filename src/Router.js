import React from "react";
import { Switch, Route } from "react-router";
// Write component imports here //
import Home from "./components/Home";
import Services from "./components/Services";


// Start Router function here //

export function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
    </Switch>
  );
}

export default Router;