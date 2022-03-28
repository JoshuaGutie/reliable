import React from "react";
import { Switch, Route } from "react-router";
import Contactus from "./components/Contactus";
// Write component imports here //
import Home from "./components/Home";
import Services from "./components/Services";
import Review from "./components/Review";

// Start Router function here //

export function Router() {
   {/* Each url path will lead to a different component */}
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/contact">
        <Contactus />
      </Route>
      <Route path="/reviews">
        <Review />
      </Route>
    </Switch>
  );
}

export default Router;