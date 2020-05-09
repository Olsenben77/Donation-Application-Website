import React, { useEffect } from "react";
import "../../index.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import './Boxes.css';




const Home = (props) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>

      <div className="boxes" data-aos="fade-up" style={{ backgroundColor: "#80cbc4" }}>
        <div className="page_inner_div">
          <h1 style={{ fontWeight: "900", color: "#90a4ae" }}>DONATIONALLY</h1>
          <p style={{ fontSize: "20px", color: "white" }}>
            is a non-profit charity search and donation
            application, helping users in multiple ways to stay informed about
            world events and opportunities to give back to those in need. Our
            core values of compassion, optimism, integrity, responsibility, and
            community drive us forward into providing a user experience that can
            create lasting change.</p>
        </div>

      </div>
      <div className="boxes" data-aos="fade-up" style={{ backgroundColor: "#80deea" }}>

        <div className="page_inner_div">
          <h1 style={{ fontWeight: "900", color: "#607d8b" }}>DONATE</h1>
          <p style={{ fontSize: "20px", color: "white" }}>
            Give to those in need by selecting a personal cause in the search
            bar. You are able to give a set amount of money using the premade
            buttons, or select custom funds with the input tab. Money donated
            will process through Paypal.</p>
        </div>

      </div>
      <div className="boxes" data-aos="fade-up" style={{ backgroundColor: "#81d4fa" }}>

        <div className="page_inner_div">
          <h1 style={{ fontWeight: "900", color: "#455a64" }}>SEARCH FOR CHARITY</h1>
          <p style={{ fontSize: "20px", color: "white" }}>
            Discover a variety of worldwide charities using the Charity Map.
            This process will geolocate by user to encourage local donation
            opportunities. You can also type in a custom area around the globe
            to find organizations that need assistance.</p>
        </div>

      </div>
      <div className="boxes" data-aos="fade-up" style={{ backgroundColor: "#F8B195" }}>

        <div className="page_inner_div">
          <h1 style={{ fontWeight: "900", color: "#263238" }}>BECOME A MEMBER</h1>
          <p style={{ fontSize: "20px", color: "white" }}>
            Members of Donationally will receive numerous perks on their
            philanthropist journey. Benefits include: information and updates on
            "Favorite" charities, personal donation history, and so much more.
            Give back by making Donationally.com a mainstay in your giving
            mission.</p>
        </div>

      </div>


    </div>




  );
}

export default Home;
