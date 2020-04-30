import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Navbar from "./components/layout/Navbar";
import Portal from "./components/pages/Portal";
import Home from "./components/pages/Home";
import Donate from "./components/pages/Donate";
import Carousel from "./components/pages/Carousel";
import Map from "./components/pages/Map";
import Footer from "./components/pages/Footer";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";
import "./App.css";

function onAuthRequired({ history }) {
  history.push("/login");
}
const secureContainer = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Route path="/Portal" exact={true} component={Portal} />
        <SecureRoute path="/staff" exact={true} component={Staff} />
        <Route
          path="/login"
          render={() => <Login baseUrl="https://dev-240113.okta.com" />}
        />
        <Route path="/implicit/callback" component={ImplicitCallback} />
      </div>
    </div>
  );
};
const homePage = () => {
  return <Home />;
};

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-240113.okta.com/oauth2/default"
          client_id="0oa384qtp4fYh5sKF4x6"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <Switch>
            <Route path="/" exact={true} component={homePage} />
            <Route component={secureContainer} />
          </Switch>
          <Carousel />
          <Donate />
          <Map />
          <Footer />
        </Security>
      </Router>
    );
  }
}

export default App;
