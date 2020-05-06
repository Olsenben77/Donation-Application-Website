import React from "react";
import Logo from "../images/greenlogo.png";
import "./navbar.css";
import "./hero.css";

function Hero() {
  return (
    <div className="container">
      <nav
        className="js-main-nav-bar js-main-nav-bar--transparent main-nav-bar"
        data-transparent="true"
      >
        <a
          className="main-nav-bar__logo"
          data-track-action="navbar"
          data-track-label="logo"
          href="/"
          title="Free Stock Photos"
        ></a>
        <div className="main-nav-bar__search-bar">
          <form
            action="/search-videos/"
            autoComplete="off"
            className="js-search-bar search-bar"
            data-search-urls-photo="/search/---query/"
            data-search-urls-query-placeholder="---query"
            data-search-urls-video="/search/videos/---query/"
            method="get"
            role="search"
          >
            <div className="search-bar__container">
              <input
                autoCapitalize="none"
                autoComplete="off"
                id="search"
                name="s"
                placeholder="Search for free photos"
                required="required"
                type="search"
              />
              <button id="search-action" title="Search for stock videos">
                <i className="rd__svg-icon"></i>
              </button>
            </div>
            <div className="js-search-bar-dropdown"></div>
          </form>
        </div>
        {/* <ul className="main-nav-bar__sub-nav">
          <li className="hide-when-mid-size-and-smaller" data-active="false">
            <div
              className="js-lazy-dropdown rd__dropdown"
              data-dropdown="explore"
              data-dropdown-initialized="true"
            >
              <a
                className="main-nav-bar__sub-nav__item rd__button"
                data-track-action="navbar"
                data-track-label="explore"
                href="/discover/"
              >
                Explore
              </a>
            </div>
          </li> */}
      </nav>
      <header className="hero">
        <div className="hero__background">
          <video
            autoPlay
            loop
            muted
            poster="https://www.pexels.com/assets/videos/free-videos-7daa2ef41a140f70c757ce91913a4ecb90570b7d7cd2b401bae868350e02c83a.jpg"
          >
            <source
              src="https://static.pexels.com/lib/videos/free-videos.mp4"
              type="video/mp4"
            ></source>
            <source
              src="https://static.pexels.com/lib/videos/free-videos.webm"
              type="video/webm"
            ></source>
          </video>
        </div>
        <section className="hero__content hero__content--centered">
          <h1 className="hero__title"> Use Donationally to:</h1>
          <div className="hero__search-container">
            <div id="container">
              <div id="flip">
                <div>
                  <div>Search For Charities</div>
                </div>
                <div>
                  <div>Donate To A Cause</div>
                </div>
                <div>
                  <div>Create Lasting Change</div>
                </div>
              </div>
            </div>

            <p>a css3 animation demo</p>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Hero;
