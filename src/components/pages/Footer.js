import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <Footer>
      <div className="footer">
        <div id="button"></div>
        <div id="container">
          <div id="cont">
            <div class="container">
              <div class="row">
                <div class="col m6 s12">
                  <h5 style={{ color: "white" }}>Contact Us:</h5>
                </div>
                <div class="col m6 s12">
                  <h5 class="white-text center">Meet The Engineers</h5>
                  <div class="row">
                    <div class="col m3 s12">
                      <a href="https://github.com/ariehh1">
                        Ari <br></br> Horowitz
                        <img
                          className="teammate"
                          src="./image/Ari.png"
                          alt="Ari"
                        />
                      </a>
                    </div>
                    <div class="col m3 s12">
                      <a href="https://github.com/Ethanlloyd21">
                        Lloyd Marcelino
                        <img
                          class="teammate"
                          src="./image/me.png"
                          alt="Lloyd"
                        />
                      </a>
                    </div>
                    <div class="col m3 s12">
                      <a href="https://github.com/Olsenben77">
                        Ben Olsen
                        <img class="teammate" src="./image/Ben.png" alt="Ben" />
                      </a>
                    </div>
                    <div class="col m3 s12">
                      <a href="https://github.com/ohhhhhwhen">
                        Owen <br></br> Chanthala
                        <img
                          class="teammate"
                          src="./image/Owen.png"
                          alt="Owen"
                        />
                      </a>
                    </div>
                    <div class="col m3 s12">
                      <a href="https://github.com/Jaredkong">
                        Jared <br></br> Kong
                        <img
                          class="teammate"
                          src="./image/Jared.png"
                          alt="Jared"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-copyright">
                <div class="container">
                  <p class="white-text text-lighten-3 center">
                    Copyright &copy; All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_center"></div>
        </div>
      </div>
    </Footer>
  );
}
export default Footer;
