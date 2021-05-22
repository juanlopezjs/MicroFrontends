import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import SearchingUser from "./SearchingUser";
import RandomUser from "./RandomUser";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/" component={RandomUser} />
      <Route exact path="/user/:searching" component={SearchingUser} />
    </Router>
  );
}

export default App;