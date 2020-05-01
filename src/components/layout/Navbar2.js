import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar2 extends Component {
  render() {
    return (
      <div className="navbar2-space">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">DONATIONALLY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/portal">Sign Up</Nav.Link>
              <Nav.Link href="/staff">Members</Nav.Link>
              <Nav.Link href="/">Contact Us</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Charity Seach</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }
}

export default Navbar2;