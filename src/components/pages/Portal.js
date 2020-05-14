import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { Jumbotron, Container } from 'react-bootstrap';
import './style.css';

export default withAuth(
  class Portal extends Component {
    state = { authenticated: null };

    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/portal');
    };

    logout = async () => {
      this.props.auth.logout('/portal');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You have entered the member portal,{' '}
            <Link to="/staff">click here</Link>
          </p>
          <button className="btn btn-success btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
          <div>
            <p className="lead">
              To create a new User Account please <a href="https://dev-240113.okta.com/signin/register" target="_blank"> click here! (Create new account) </a>
            </p>
            <p className="lead">If you are an active member please login.</p>
            <button className="btn btn-success btn-lg" onClick={this.login}>
              Login
          </button>
          </div>
        );

      return (


        <Jumbotron fluid>
          <Container fluid>
            <h1>DONATIONALLY</h1>
            <p>
              {mainContent}
            </p>
          </Container>
        </Jumbotron>
      );
    }
  }
);
