import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Donate.css";

function Donate() {
  return (
    <div className="Donate">
      <a>
        <div className="service-head1 text-center">
          <h2>
            {" "}
            How to Donate
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
      <div className="row">
        <div className="col-md-1"> </div>
        <div className="col-md-10">
          <div
            className="card text-center"
            style={{ width: "100rem", left: "5%" }}
          >
            <div className="card-body">
              <h2 className="card-title"></h2>
              <div className="flexbox">
                <div className="search">
                  <h1>
                    Donate to a charity of your choice by selecting from any of
                    the following charities:
                  </h1>
                  {/* <h3>Click on search icon, then type your keyword.</h3> */}
                  <div>
                    <input
                      type="text"
                      placeholder="       Search . . ."
                      required
                    />
                  </div>
                </div>
              </div>
              <p className="card-text"></p>
              <button className="btn btn-primary">$10</button>
              <button className="btn btn-primary">$25</button>
              <button className="btn btn-primary">$50</button>
              <button className="btn btn-primary" style={{ marginRight: "2%" }}>
                $100
              </button>
              or
              <button className="btn btn-primary"> $ </button>
              <input
                style={{
                  width: "100px",
                  height: "35px",
                  borderRadius: "30px",
                  border: "3px solid black",
                }}
              ></input>
              <button className="btn btn-primary"> Give Now </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
}
export default Donate;
