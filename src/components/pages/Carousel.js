import handRight from "./image/handRight.jpg";
import handLeft from "./image/handLeft.jpg";
import handLogoGreen from "./image/handLogoGreen.png";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="Carousel">
      <a>
        <div className="service-head1 text-center">
          <h2>
            {" "}
            How It Works
            <div className="comment1"> </div>
          </h2>
          <h3>
            {" "}
            <span className="line">
              {" "}
              <div className="border1"></div>
            </span>
          </h3>
        </div>
      </a>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="1"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={handRight}
              alt="worldmap"
              style={{ height: "525px" }}
            />
            <div className="textblock">
              <div className="carousel-caption d-none d-lg-block">
                <h2>Find a charity</h2>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={handLogoGreen}
              alt="handLogoGreen"
              style={{ height: "525px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Donate to those in need using <u> Donationally.org </u>
              </h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={handLeft}
              alt="handleft"
              style={{ height: "525px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Your donations will create lasting change for children and
                communities around the world
              </h2>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
