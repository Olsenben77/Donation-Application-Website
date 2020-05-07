import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FacebookFilled, TwitterOutlined, MessageFilled } from '@ant-design/icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (

        <div className="footer-div">
            <Container fluid>
                <Row>
                    <Col>
                        ABOUT DONATIONALLY
                        OUR MISSION
                        DONATE
                        CHARITY SEARCH
                        NEWS
                        MEMBERS
                        SIGN-UP
                        CONTACTS
                    </Col>
                    <Col>
                        PRIVACY POLICY
                        PHOTO/VIDEO DISCLAIMER
                        DISCLOSURE
                    </Col>
                </Row>
            </Container>

        </div>


    );
}

export default Footer;