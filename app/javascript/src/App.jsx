import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "components/Dashboard";
import NavBar from "./components/NavBar";
import HandleShortenUrl from "./components/Url/HandleShortenUrl";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/:slug" component={HandleShortenUrl} />
      </Switch>
    </Router>
  );
};

export default App;
