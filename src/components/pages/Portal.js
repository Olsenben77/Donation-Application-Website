import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import "./style.css";

export default withAuth(
  class Home extends Component {
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
      this.props.auth.login("/Portal");
    };

    logout = async () => {
      this.props.auth.logout("/Portal");
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You have entered the member portal,{" "}
            <Link to="/staff">click here</Link>
          </p>
          <button className="btn btn-success btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="lead">
            To create a new User Account please{" "}
            <a href=" https://dev-240113.okta.com/" target="_blank">
              {" "}
              click here!{" "}
            </a>
          </p>
          <p className="lead">If you are an active User please Sign in.</p>
          <button className="btn btn-success btn-lg" onClick={this.login}>
            Sign in
          </button>
        </div>
      );

      return (
        <div className="jumbotron">
          <h1 className="display-4">DONATIONALLY</h1>
          {mainContent}
        </div>
      );
    }
  }
);
