import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "components/Dashboard";
import NavBar from "./components/NavBar";

const App = () => {
  // useEffect(() => {
  //   // API re
  // }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
