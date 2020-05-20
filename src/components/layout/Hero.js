import React, { useEffect, useState } from "react";
import { Nav, Form } from "react-bootstrap";
import "./navbar.css";
import "./hero.css";

import video from "../videos/alternate_video2.mp4";

import White from "../images/white.png";


function Hero() {
  const [scrollY, setScrollY] = useState({ y: 0 });
  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  const handleScroll = () => {
    console.log(window.scrollY);
    let temp = window.scrollY;
    setScrollY({ y: temp });
  };
  console.log(scrollY);
  return (
    <div className="hero_container">
      <nav
        className={
          scrollY.y >= 300
            ? `js-main-nav-bar js-main-nav-bar--transparent main-nav-bar`
            : `js-main-nav-bar js-main-nav-bar--transparent main-nav-bar hide`
        }
      >
        <a
          className="main-nav-bar__logo"
          data-track-action="navbar"
          data-track-label="logo"
          href="/"
          title="Donationally"
        >
          <div class="main-nav-bar__logo__img">
            <svg
              src={White}
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
            ></svg>
          </div>
          <div
            class="hide-when-mid-size-and-smaller main-nav-bar__logo__text"
            href="/"
            style={{
              position: "absolute",
              left: "3%",
            }}
          >
            <img
              src={White}
              href="/"
              alt=""
              style={{ width: "45px", height: "45px", marginRight: "10px" }}
            ></img>
          </div>
          <Form inline>
            <Nav.Link href="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/portal" style={{ color: "white" }}>
              Members
            </Nav.Link>
          </Form>
        </a>
      </nav>
      <header className="hero">
        <div className="hero__background">
          <video
            autoPlay
            loop
            muted
          // poster="https://www.pexels.com/assets/videos/free-videos-7daa2ef41a140f70c757ce91913a4ecb90570b7d7cd2b401bae868350e02c83a.jpg"
          >
            <source src={video} type="video/mp4"></source>
          </video>
        </div>
        <section className="hero__content hero__content--centered">
          <h1 className="hero__title"> </h1>
          <div
            id="container"
            style={{
              position: "relative",
            }}
          >
            <div id="flip">
              <div>
                <div>Search For Charities</div>
              </div>
              <div>
                <div>Donate To A Chosen Cause</div>
              </div>
              <div>
                <div>Create Lasting Change</div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Hero;
