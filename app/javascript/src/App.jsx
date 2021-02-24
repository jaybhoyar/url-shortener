import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "components/Dashboard";
import NavBar from "./components/NavBar";
import HandleShortenUrl from "./components/Url/HandleShortenUrl";
import urlsApi from "apis/urls";

const App = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const response = await urlsApi.list();
      setUrls(response.data.urls);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Dashboard urls={urls} fetchUrls={fetchUrls} />}
        />
        <Route
          path="/:slug"
          component={() => <HandleShortenUrl fetchUrls={fetchUrls} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
