import React, { useEffect } from "react";
import "../../index.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import './Boxes.css';
import { Image, Col, Row, Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import Kids from '../images/charity.png';
import { UserAddOutlined, DollarCircleOutlined, BarChartOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";




const Home = (props) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>

      <div className="normal" data-aos="zoom-in" data-aos-delay="100" style={{ backgroundColor: "#FFFFFF", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="page_inner_div">
          <p style={{ fontSize: "60px", fontWeight: "300", color: "#66615b", marginTop: "30px" }}>Donationally</p>
          <p style={{ fontSize: "20px", color: "#66615b", paddingLeft: "70px", paddingRight: "70px" }}>
            is a non-profit charity search and donation
            application, helping users in multiple ways to stay informed about
            world events and opportunities to give back to those in need. </p>
        </div>

      </div>
      <div className="normal" data-aos="fade-up" style={{ backgroundColor: "#D8C1AB", paddingLeft: "300px", paddingRight: "300px", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="row">

          <div class="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-right" data-aos-delay="100" >
            <Image src={Kids} fluid style={{ border: "10px solid white" }} />
          </div>
          <div class="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h1 style={{ fontWeight: "900", color: "#607d8b", marginTop: "30px" }}>Our Mission</h1>
            <p style={{ fontSize: "20px", color: "white", paddingBottom: "20px" }}>
              is to create lasting change one donation at a time.</p>
            <p style={{ fontSize: "20px", color: "white", paddingBottom: "20px" }}>We <span style={{ fontSize: "50px", color: "#607d8b" }}>envision</span> a world everyone has the opportunity to live a better life.</p>
          </div>

        </div>
      </div>


      <div className="normal" data-aos="fade-up" style={{ backgroundColor: "#7A9E9F", paddingLeft: "300px", paddingRight: "300px", paddingTop: "100px", paddingBottom: "100px" }}>

        <div className="page_inner_div">
          <h1 style={{ fontWeight: "900", color: "white", marginTop: "30px" }}>Our Core Values</h1>
          <Container fluid>
            <Row style={{ paddingTop: "30px" }}>
              <Col data-aos="zoom-in" data-aos-delay="100" style={{ padding: "0 20px 0 20px" }}>
                <h5 style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>COMPASSION</h5>
                <p style={{ color: "white", fontSize: "18px" }}>We believe that all perons deserve to be treated with respect, compassion and dignity.</p>
              </Col>
              <Col data-aos="zoom-in" data-aos-delay="100" style={{ padding: "0 20px 0 20px" }}>
                <h5 style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>OPTIMISM</h5>
                <p style={{ color: "white", fontSize: "18px" }}>We believe the ability of people to strive for better lives, and we help provide them wth the means to achieve their dreams.</p>
              </Col>
              <Col data-aos="zoom-in" data-aos-delay="100" style={{ padding: "0 20px 0 20px" }}>
                <h5 style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>INTEGRITY</h5>
                <p style={{ color: "white", fontSize: "18px" }}>We will ensure honesty and fairness in all our actions. We will always do the right thing.</p>
              </Col>
            </Row>
            <Row style={{ padding: "50px" }}>
              <Col data-aos="zoom-in" data-aos-delay="100" style={{ padding: "0 35px 0 35px" }}>
                <h5 style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>RESPONSIBILITY</h5>
                <p style={{ color: "white", fontSize: "18px" }}>We will hold ourselves to a high standard of accountability and honor every donation commitment. We will never take any donation for personal means.</p>
              </Col>
              <Col data-aos="zoom-in" data-aos-delay="100" style={{ padding: "0 35px 0 35px" }}>
                <h5 style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>COMMUNITY</h5>
                <p style={{ color: "white", fontSize: "18px" }}>We are building a community and network to empower others and give back to those in need.</p>
              </Col>
            </Row>
          </Container>

        </div>

      </div>
      <div className="normal" style={{ backgroundColor: "#FFFFFF", paddingLeft: "300px", paddingRight: "300px", paddingTop: "100px", paddingBottom: "100px" }}>

        <h1 style={{ fontWeight: "900", color: "#66615b", marginTop: "30px" }} data-aos="left" data-aos-delay="100" >Join Us!</h1>
        <p style={{ fontSize: "20px", color: "#66615b", padding: "10px 0 30px 0" }} data-aos="right" data-aos-delay="100">
          Members of Donationally will receive numerous perks on their
          philanthropist journey. Benefits include: information and updates on
          "Favorite" charities, personal donation history, and so much more.
          Give back by making Donationally.com a mainstay in your giving
            mission.</p>
        <div className="page_inner_div">
          <InputGroup className="mb-6">
            <FormControl
              type="email"
              placeholder="Enter your email"
              aria-label="New Account"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="info" href="https://dev-240113.okta.com/signin/register" target="_blank">
                Sign-up
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <div style={{ padding: "20px 0 0 0" }}>
            <UserAddOutlined style={{ fontSize: '40px' }} className="contact_icon" />
            <BarChartOutlined style={{ fontSize: '40px' }} className="contact_icon" />
            <DollarCircleOutlined style={{ fontSize: '40px' }} className="contact_icon" />
          </div>
        </div>

      </div>
      <div className="normal" data-aos="fade-up" style={{ backgroundColor: "#81d4fa", paddingLeft: "300px", paddingRight: "300px", paddingTop: "100px", paddingBottom: "100px" }}>

        <div className="page_inner_div">
          <h1 style={{ fontWeight: "900", color: "#263238" }}>Donate now!</h1>
          <p style={{ fontSize: "20px", color: "white", marginBottom: "0px" }}>
            Discover a variety of worldwide charities using the Charity Map.
            This process will geolocate by user to encourage local donation
            opportunities. You can also type in a custom area around the globe
            to find organizations that need assistance.</p>
        </div>

      </div>


    </div>




  );
}

export default Home;
