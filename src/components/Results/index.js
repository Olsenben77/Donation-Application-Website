import React from "react";

function Results({ children }) {
  return (
    <div
      style={{
        clear: "both",
        paddingTop: 10,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 0,
        textAlign: "left",
      }}
      className="jumbotron jumbotron-fluid border border-dark rounded"
    >
      {children}
    </div>
  );
}

export default Results;
