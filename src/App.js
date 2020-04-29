import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Portal from './components/pages/Portal';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-240113.okta.com/oauth2/default"
          client_id="0oaad7oto4uSwXPVM4x6"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}

        >
          <div className="App">
            <Navbar />
            <Layout>
              <div className="container">
                <Route path="/" exact={true} component={Home} />
                <Route path="/portal" exact={true} component={Portal} />
                <SecureRoute path="/staff" exact={true} component={Staff} />
                <Route
                  path="/login"
                  render={() => (
                    <Login baseUrl="https://dev-240113.okta.com" />
                  )}
                />
                <Route path="/implicit/callback" component={ImplicitCallback} />
              </div>
            </Layout>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
