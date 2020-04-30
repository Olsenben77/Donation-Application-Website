import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section>
        <h1>Classy Footer</h1>
        <h3>Hover over the circle below</h3>
      </section>
      <div className="footer">
        <div id="button"></div>
        <div id="container">
          <div id="cont">
            <div className="footer_center">
              <h3 style={{ color: "white" }}>Classy footer text</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
