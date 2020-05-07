import React, { useEffect } from "react";

import Image from '../images/newslogo.jpg';
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




    </div>




  );
}

export default Home;
