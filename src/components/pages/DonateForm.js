import React, { Component } from 'react';
import { Form, Col, Button, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css';





class DonateForm extends Component {
    state = {
        open: false,
        width: window.innerWidth,
        show: false
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    handleModal() {
        this.setState({ show: !this.state.show })
    }


    render() {
        return (
            <div className="page_inner_div" id="donate_grid">
                <h1 style={{ fontWeight: "900", textAlign: "center" }}>This section is on TESTING MODE ONLY!</h1>
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
                        <Button variant="outline-primary" onClick={() => { this.handleModal() }}>View Agreement</Button>
                        <Form.Check type="checkbox" label="I read the Disclosure and Agreed to the Terms" />
                    </Form.Group>

                    <Button variant="outline-dark" type="submit">
                        <Link
                            onClick={this.toggleNav}
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                            to="/donate"
                        >
                            Submit
              </Link>
                    </Button>
                </Form>


                <Modal show={this.state.show} onHide={() => this.handleModal()} >
                    <Modal.Header closeButton>
                        <Modal.Title>Donation Agreement</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ fontSize: "9px" }}>
                        <p>
                            This Gift/ Donation Agreement (“Agreement”) is made this ____ day of _______ between [Donor’s Names] and their assignee (hereinafter referred to as “the Donor”), and [Your Organization] an [arts nonprofit organization located in Indianapolis, Indiana]. The Donor and [Your Organization] agree as follows:
                            </p>
                        <p>

                            Donor Commitment. The Donor hereby pledges to [Your Organization] the sum of [insert amount] or more, which as provided for herein is designated for the benefit of [Fund Name] Endowment.
                            Donor Purpose.
                            Purpose. It is understood and agreed that the gift will be used for the following purpose or purposes: To establish an endowment from which the annual interest earnings will be used to [state purpose].
                            Payment. It is further understood and agreed that the gift will be paid in full on or before [insert date].
                            </p>
                        <p>
                            It is also understood and agreed that the gift funds as received may be invested by a third-party that shall best determine investment options for this endowment fund (see item #4 below). The spending policy for the endowment will be the policy set forth and approved by [Your Organization] Board of Directors which will likely include the use of annual interest earnings only and not invade the principal of the fund to protect and perpetuate growth.
                            </p>



                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default DonateForm;