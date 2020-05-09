import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css';







class DonateForm extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };


    render() {
        return (
            <div className="page_inner_div" id="donate_grid">
                <h1 style={{ fontWeight: "900", textAlign: "center" }}>Please fill in the form and read the Disclosure Agreement</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>State</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control placeholder="$ USD" />
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="I read the Disclosure and Agreed to the Terms" />
                    </Form.Group>

                    <Button variant="outline-primary" type="submit">
                        <Link
                            onClick={this.toggleNav}
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                            to="/donate"
                        >
                            Submit
              </Link>
                    </Button>
                </Form>
            </div>
        )
    }
}

export default DonateForm;