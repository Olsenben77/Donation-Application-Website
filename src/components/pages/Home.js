import React, { useEffect } from "react";
import "../../index.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import './Boxes.css';
import { Col, Row, Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import Kids from '../images/kids.png';
import Boy from '../images/boy.png';
import Girl from '../images/girl.png';
import RedHand from '../images/redhand.png';
import HeartHand from '../images/hearthand.png';
import Kids2 from '../images/container.png';

import { UserAddOutlined, DollarCircleOutlined, BarChartOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";




const Home = (props) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>

      <div className="normal" data-aos="fade-down" data-aos-delay="100" style={{ backgroundColor: "#FFFFFF", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="page_inner_div">
          <h1 style={{ fontWeight: "900", color: "#263238", marginTop: "30px" }} id="responsive_h1" data-aos="zoom-in" data-aos-delay="100">Donationally</h1>
          <h7 style={{ color: "#66615b" }} id="responsive_h7" data-aos="fade-right" data-aos-delay="100">
            is a non-profit charity search and donation
            application, helping users in multiple ways to stay informed about
            world events and opportunities to give back to those in need. </h7>
          <br></br>
          <h7 style={{ color: "#66615b", paddingBottom: "20px", fontStyle: "Italic" }} id="responsive_h7" data-aos="fade-right" data-aos-delay="100">
            Please help us start our non-profit organization by donating to our GoFundme </h7>
          <Button variant="outline-secondary" href="https://www.gofundme.com/f/donationally?=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1">GoFundme</Button>{' '}
          <div className="row" style={{ paddingTop: "70px" }}>
            <div className="col-md-6" data-aos="fade-right" data-aos-delay="100">
              <img src={HeartHand} style={{ border: "10px solid white" }} fluid className="only" />
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="100">
              <img src={RedHand} style={{ border: "10px solid white" }} fluid className="only" />
            </div>
          </div>
        </div>

      </div>
      <div className="normal" data-aos="fade-up" data-aos-delay="100" style={{ backgroundColor: "#D8C1AB", paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="page_innver_div">



          <h1 style={{ fontWeight: "900", color: "#607d8b", marginTop: "30px" }} id="responsive_h1">Our Mission</h1>
          <h7 id="responsive_h7" style={{ color: "white" }}>
            is to create lasting change one donation at a time.</h7>
          <br></br>
          <h7 id="responsive_h7" style={{ color: "white" }}> We <span id="responsive_h1" style={{ color: "#607d8b" }}>envision</span> a world everyone has the opportunity to live a better life.</h7>

        </div>

      </div>


      <div className="normal" data-aos="fade-up" style={{ backgroundColor: "#7A9E9F", paddingTop: "100px", paddingBottom: "100px" }}>

        <div className="page_inner_div">
          <h1 style={{ fontWeight: "900", color: "white", marginTop: "30px" }} id="responsive_h1">Our Core Values</h1>


          <div className="row" style={{ paddingTop: "30px" }}>



            <div className="col-md-4" style={{ padding: "0 70px 0 70px" }}>
              <h7 id="responsive_h7" style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat", paddingTop: "20px" }}>COMPASSION</h7>
              <p id="responsive_h7" style={{ color: "white", paddingBottom: "20px" }}>We believe that all perons deserve to be treated with respect, compassion and dignity.</p>
            </div>
            <div className="col-md-4" style={{ padding: "0 70px 0 70px" }}>
              <h7 id="responsive_h7" style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat", paddingTop: "10px" }}>INTEGRITY</h7>
              <p id="responsive_h7" style={{ color: "white" }}>We will ensure honesty and fairness in all our actions. We will always do the right thing.</p>
            </div>
            <div className="col-md-4" style={{ padding: "0 70px 0 70px" }}>
              <h7 id="responsive_h7" style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>COMMUNITY</h7>
              <p id="responsive_h7" style={{ color: "white" }}>We are building a community and network to empower others and give back to those in need.</p>
            </div>



            <div className="row">
              <div className="col-md-6" style={{ padding: "20px 0 20px 0" }} >
                <img src={Boy} fluid style={{ border: "10px solid white", width: "75%", height: "auto" }} className="only" />
              </div>
              <div className="col-md-6" style={{ paddingBottom: "20px", paddingTop: "20px" }}>
                <section>
                  <img src={Girl} fluid style={{ border: "10px solid white", width: "65%", height: "auto" }} className="only" />
                  <br></br>
                </section>
                <section style={{ paddingTop: "30px" }}>
                  <img src={Kids2} fluid style={{ border: "10px solid white", width: "65%", height: "auto" }} className="only" />
                </section>
              </div>
            </div>


          </div>


          <div className="row" style={{ paddingTop: "50px" }}>

            <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100" style={{ padding: "0 90px 0 90px" }}>
              <h7 id="responsive_h7" style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>OPTIMISM</h7>
              <p id="responsive_h7" style={{ color: "white" }} id="responsive_h7">We believe the ability of people to strive for better lives, and we help provide them wth the means to achieve their dreams.</p>
            </div>
            <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100" style={{ padding: "0 90px 0 90px" }}>
              <h7 id="responsive_h7" style={{ fontStyle: "italic", color: "white", fontWeight: "700", fontFamily: "Montserrat" }}>RESPONSIBILITY</h7>
              <p style={{ color: "white" }} id="responsive_h7">We will hold ourselves to a high standard of accountability and honor every donation commitment. We will never take any donation for personal means.</p>
            </div>

          </div>


        </div>

      </div>
      <div className="normal" style={{ backgroundColor: "#FFFFFF", paddingTop: "100px", paddingBottom: "100px" }}>

        <h1 id="responsive_h1" style={{ fontWeight: "900", color: "#66615b", marginTop: "30px" }} data-aos="left" data-aos-delay="100" >Join Us!</h1>
        <p id="responsive_h7" style={{ color: "#66615b", padding: "10px 90px 30px 90px" }} data-aos="right" data-aos-delay="100">
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
      <div className="normal" data-aos="fade-up" style={{ backgroundColor: "#81d4fa", paddingTop: "100px", paddingBottom: "100px" }}>

        <div className="page_inner_div">
          <h1 id="responsive_h1" style={{ fontWeight: "900", color: "#263238" }}>Donate now!</h1>
          <p id="responsive_h7" style={{ fontSize: "20px", color: "white", marginBottom: "0px", paddingBottom: "20px" }}>Please help us start our non-profit organization by donating to our GoFundme</p>
          <Button variant="outline-secondary" href="https://www.gofundme.com/f/donationally?=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1">GoFundme</Button>{' '}

        </div>

      </div>


    </div>




  );
}

export default Home;
