import React from "react";
import "./index.css";

function ViewBtn(props) {
  return (
    <span
      className="btn btn-info btn-view"
      {...props}
      role="button"
      tabIndex="0"
      target="_blank"
      rel="noopener noreferrer"
    >
      View
    </span>
  );
}

export default ViewBtn;
