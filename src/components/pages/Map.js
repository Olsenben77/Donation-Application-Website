import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Map.css";

function Map() {
  return (
    <div className="Map">
      <a>
        <div
          className="service-head1 text-center"
          style={{ right: "100px!important" }}
        >
          <h2>
            {" "}
            Map
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
    </div>
  );
}
export default Map;
