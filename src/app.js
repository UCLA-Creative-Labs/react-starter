import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "loader";
import NavBar from "components/navbar.jsx";

const loadHomePage = Loader(() => {
  return import("pages/home");
});

const loadApplicationPage = Loader(() => {
  return import("pages/application");
});

const leftNavBar = [<div>1</div>, <div>hello</div>];
const rightNavBar = <div>right</div>;

class App extends Component {
  render() {
    return (
      <div>
        {/* NAVBAR/HEADER GOES HERE */}
        <NavBar left={leftNavBar} right={rightNavBar} />
        <Switch>
          <Route exact path="/" component={loadHomePage} />
          <Route path="/application" component={loadApplicationPage} />
          <Redirect to="/" />
        </Switch>
        {/* FOOTER GOES HERE */}
      </div>
    );
  }
}

export default App;
