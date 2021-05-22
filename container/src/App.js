import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_USERS_HOST: usersHost,
  REACT_APP_COMPANIES_HOST: companiesHost,
} = process.env;

function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title">&#129302; Users and Companies &#127970;</h1>
      <h4>Random pics of users and companies</h4>
    </div>
  );
}

function Users({ history }) {
  return <MicroFrontend history={history} host={usersHost} name="Users" />;
}

function Companies({ history }) {
  return <MicroFrontend history={history} host={companiesHost} name="Companies" />;
}

function SearchingUser({ history }) {
  return (
    <div>
      <Header />
      <div className="home">
        <MicroFrontend history={history} host={usersHost} name="Users" />
      </div>
    </div>
  );
}

function Home({ history }) {
  const [input, setInput] = useState("");

  const handleOnClick = () => {
    history.push(`/user/${input}`);
  };

  return (
    <div>
      <Header />
      <div className="home">
        <input
          type="text"
          placeholder="Search a user"
          onBlur={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Search</button>
      </div>

      <div className="home">
        <div className="content">
          <div className="user">
            <Users />
          </div>
          <div className="company">
            <Companies />
          </div>
        </div>
      </div>
    </div>
  );
}

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/user/:searching" component={SearchingUser} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;