import React from "react";
import "./index.css";

function SaveBtn(props) {
  return (
    <span
      className="btn btn-success btn-save"
      {...props}
      role="button"
      tabIndex="0"
    >
      Save
    </span>
  );
}

export default SaveBtn;
