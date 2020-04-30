import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light  bg-success">
      <div className="wrapper">
        <a className="navbar-brand" href="#" style={{ color: "white" }}>
          Donationally
        </a>
      </div>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      > */}
      {/* <span className="navbar-toggler-icon"></span>
      </button> */}

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <ul className="navbar-nav mr-auto">
        <a className="nav-link" href="#">
          <li className="nav-item" style={{ textAlign: "center" }}>
            Donate
          </li>
        </a>

        <a className="nav-link" href="#" style={{ color: "white" }}>
          <li className="nav-item">Map</li>
        </a>
        <a className="nav-link" href="#" style={{ color: "white" }}>
          <li className="nav-item">Blog/Chat</li>
        </a>

        {/* </div> */}
        <span className="nav-right">
          <a
            className="nav-link"
            href="#"
            style={{ color: "white", margin: "5px" }}
          >
            <li className="nav-item" style={{ listStyle: "none" }}>
              <i className="fas fa-home" style={{ padding: "5px" }}></i>
              Portal (sign in)
            </li>
          </a>
          <a
            className="nav-link"
            href="#"
            style={{ color: "white", margin: "5px" }}
          >
            <li className="nav-item" style={{ listStyle: "none" }}>
              <i className="fas fa-user-alt" style={{ padding: "5px" }}></i>
              About Us
            </li>
          </a>
        </span>
      </ul>
    </nav>
  );
}

export default Home;
