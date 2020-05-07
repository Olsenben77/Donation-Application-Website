import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "../../index.css";

import Image from '../images/kids.jpg';
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
                <div data-aos="fade-left" className="normal">

                    <h1 style={{ fontWeight: "900" }}>Our Mission...</h1>
                </div>

                <img src={Image} id="photo" style={{ alignContent: "center", width: "80%", height: "80%" }} alt=""></img>
                <div data-aos="fade-up" className="boxes" style={{ backgroundColor: "#F8B195" }}>
                    <h4 style={{ color: "white" }}>
                        DONATIONALLY's mission is to build lasting relationship with the community and help those who are in need.
                    </h4>
                </div>

                <div data-aos="fade-left" className="boxes" style={{ backgroundColor: "#F67280" }}>
                    <h4 style={{ color: "white" }}>
                        Our vision is a world in which every person get a chance to have a better life.
                    </h4>
                </div>

                <div data-aos="fade-right" className="normal">

                    <h1 style={{ fontWeight: "900" }}>Our Core Values...</h1>
                </div>
                <div className="boxes" style={{ backgroundColor: "#C06C84" }}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h5 style={{ fontStyle: "italic", color: "white" }}>COMPASSION</h5>
                                <p style={{ color: "white" }}>We believe that all perons deserve to be treated with respect, compassion and dignity.</p>
                            </Col>
                            <Col>
                                <h5 style={{ fontStyle: "italic", color: "white" }}>OPTIMISM</h5>
                                <p style={{ color: "white" }}>We believe the ability of people to strive for better lives, and we help provide them wth the means to achieve their dreams.</p>
                            </Col>
                            <Col>
                                <h5 style={{ fontStyle: "italic", color: "white" }}>INTEGRITY</h5>
                                <p style={{ color: "white" }}>We will ensure honesty and fairness in all our actions. We will always do the right thing.</p>
                            </Col>
                        </Row>
                    </Container>

                </div>


                <div className="boxes" style={{ backgroundColor: "#6C5B7B" }}>
                    <Container>
                        <Row>
                            <Col>
                                <h5 style={{ fontStyle: "italic", color: "white" }}>RESPONSIBILITY</h5>
                                <p style={{ color: "white" }}>We will hold ourselves to a high standard of accountability and honor every donation commitment. We will never take any donation for personal means.</p>
                            </Col>
                            <Col>
                                <h5 style={{ fontStyle: "italic", color: "white" }}>COMMUNITY</h5>
                                <p style={{ color: "white" }}>We are building a community and network to empower others and give back to those in need.</p>
                            </Col>
                        </Row>
                    </Container>

                </div>


                <div data-aos="fade-up" className="boxes">

                    <h5>COMMUNITY</h5>
                    <p>We are building a community and network to empower others and give back to those in need.</p>

                </div>

            </div>
        </div >




    );
}

export default About;