import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import logo from "./image/logo.PNG";
import "../../index.css";
import { Input } from "reactstrap";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import './Boxes.css';



const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>

      <div className="home-news" style={{ backgroundColor: "#B09A70" }}>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className="home-div">
        <h1>OUR MISSION:</h1>
        <div data-aos="fade-up" className="boxes">
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        </div>

        <div data-aos="fade-up" className="boxes">
          <h1 style={{ fontStyle: "italic", color: "green" }}>COMPASSION</h1>
          <h4>We believe that all perons deserve to be treated with respect, compassion and dignity.</h4>
        </div>

        <div data-aos="fade-up" className="boxes">
          <h1>OPTIMISM</h1>
          <h4>We believe the ability of people to strive for better lives, and we help provide them wth the means to achieve their dreams.</h4>
        </div>

        <div data-aos="fade-left" className="boxes">
          <h1>INTEGRITY</h1>
          <h4>We will ensure honesty and fairness in all our actions. We will always do the right thing.</h4>
        </div>

        <div data-aos="fade-right" className="boxes">
          <h2>RESPONSIBILITY</h2>
          <h4>We will hold ourselves to a high standard of accountability and honor every donation commitment. We will never take any donation for personal means.</h4>
        </div>


        <div data-aos="fade-up" className="boxes">

          <h2>COMMUNITY</h2>
          <h4>We are building a community and network to empower others and give back to those in need.</h4>

        </div>

      </div>
    </div >

      
    

  );
}

export default Home;
