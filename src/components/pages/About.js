import React, { useEffect } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

import "../../index.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import './Boxes.css';




const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);



    return (


        <div>

            <div className="about-div">
                <div data-aos="fade-left" id="normal">

                    <h1 style={{ fontWeight: "900" }}> ... OUR MISSION ... </h1>
                    <h4> Our mission is to create lasting change one donation at a time.</h4>
                </div>



                <div id="div_size">


                    <div data-aos="fade-right" className="boxes2" style={{ backgroundColor: "#F8B195" }}>


                        <h3 style={{ color: "white" }}> We envision a world everyone has the opportunity to live a better life.

                        </h3>

                    </div>

                </div>




                <div data-aos="fade-up">

                    <h1 style={{ fontWeight: "900" }} className="normal">... CORE VALUES ...</h1>
                </div>
                <div className="boxes" style={{ backgroundColor: "#C06C84" }}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h5 style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>COMPASSION</h5>
                                <p style={{ color: "white" }}>We believe that all perons deserve to be treated with respect, compassion and dignity.</p>
                            </Col>
                            <Col>
                                <h5 style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>OPTIMISM</h5>
                                <p style={{ color: "white" }}>We believe the ability of people to strive for better lives, and we help provide them wth the means to achieve their dreams.</p>
                            </Col>
                            <Col>
                                <h5 style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>INTEGRITY</h5>
                                <p style={{ color: "white" }}>We will ensure honesty and fairness in all our actions. We will always do the right thing.</p>
                            </Col>
                        </Row>
                    </Container>

                </div>


                <div data-aos="fade-up" className="boxes" style={{ backgroundColor: "#6C5B7B" }}>
                    <Container>
                        <Row>
                            <Col>
                                <h5 style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>RESPONSIBILITY</h5>
                                <p style={{ color: "white" }}>We will hold ourselves to a high standard of accountability and honor every donation commitment. We will never take any donation for personal means.</p>
                            </Col>
                            <Col>
                                <h5 style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>COMMUNITY</h5>
                                <p style={{ color: "white" }}>We are building a community and network to empower others and give back to those in need.</p>
                            </Col>
                        </Row>
                    </Container>

                </div>


                <div data-aos="fade-up" className="boxes2">

                    <div className="mb-2">
                        <Button variant="secondary" size="lg">
                            Donate Now
                        </Button>{' '}
                        <Button variant="secondary" size="lg">
                            Charity Search
                        </Button>


                    </div>
                </div>
            </div>

        </div>
    );


}

export default About;