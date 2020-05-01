import React from "react";
import Image from '../pages/image/kids.jpg'
import "./navbar.css";

function Hero() {
    return (
        <div
            className="hero text-center"
            style={{
                backgroundImage: `url(${Image})`,
            }}
        >


        </div>
    );
}

export default Hero;