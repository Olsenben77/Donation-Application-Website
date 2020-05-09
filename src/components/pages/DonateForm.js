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
                        <p>
                            Endowment. The gift specified above shall be used for the purpose of creating an endowment fund to be known as the [Fund Name] (“Fund”). The assets of the Fund may be merged or pooled for investment and investment management purposes with the general endowment or other assets of [Your Organization] and managed and invested in accordance with [Your Organization] policy and procedure, but shall be entered on the books and records of [Your Organization] as the [Name of Fund]. Distributions in support of the above gift purpose and reasonable fees associated with securing, raising, investing, and administering such funds shall be charged to the said Fund administered in accordance with the policies and procedures of [Your Organization] then in effect.
                            Intent. It is the agreement of the parties and the intention of the Donor that this gift and any unpaid promised installment under this Agreement shall constitute the Donor’s binding obligation and shall be enforceable at law and equity, including, without limitation, against the Donor and the Donor’s estate, heirs and personal representatives, and their successors and assignees. The Donor acknowledges that [Your Organization] has substantially relied, and shall continue to rely, on the Donor’s gift being fully satisfied as set forth herein. The Donor acknowledges that [Your Organization] has committed substantial resources toward the match.
                            </p>


                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default DonateForm;