import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.css";

import "bootstrap/dist/css/bootstrap.min.css";

class Navbar2 extends Component {
  render() {
    return (
      <div className="navbar2-space">
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="/" style={{ color: "white" }}>
            DONATIONALLY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/">Donate</Nav.Link>
              <Nav.Link href="/News">News</Nav.Link>
              <NavDropdown title="Charity Map" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" style={{ color: "grey" }}>
                  Charity Search
                </NavDropdown.Item>
                <NavDropdown.Item href="/Map" style={{ color: "grey" }}>
                  Charities Near Me
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbar2;
