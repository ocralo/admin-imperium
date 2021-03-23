import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

//import Components
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";

function Routes(props) {
  return (
    <Router>
      <div>
        <NavbarMenu />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
