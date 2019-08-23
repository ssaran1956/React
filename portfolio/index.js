import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./Components/Portfolio";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "bootstrap/dist/css/bootstrap.css";
import Jokes from "./Components/Jokes";
import "./index.css";
import Header from "./Components/Header";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Header>
            <Portfolio />
          </Header>
        )}
      />
      <Route
        path="/jokes"
        render={() => (
          <Header>
            <Jokes />
          </Header>
        )}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
