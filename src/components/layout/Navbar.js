import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" id="title" to="/">
            Donationally
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/Portal">
                  Portal
                </Link>
                <Link className="nav-link" to="/staff">
                  Staff
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
