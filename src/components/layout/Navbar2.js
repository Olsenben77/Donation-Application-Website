import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
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
              <Nav.Link href="/" style={{ color: "white" }}>
                About Us
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                Donate
              </Nav.Link>
              <NavDropdown
                title="Charity Map"
                id="basic-nav-dropdown"
                style={{ color: "white" }}
              >
                <NavDropdown.Item href="#action/3.1" style={{ color: "grey" }}>
                  Charity Search
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" style={{ color: "grey" }}>
                  Charities Near Me
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Nav.Link href="/portal" style={{ color: "white" }}>
                Contact us
              </Nav.Link>
              <Nav.Link href="/staff" style={{ color: "white" }}>
                Members
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                Portal (Sign-In)
              </Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbar2;
