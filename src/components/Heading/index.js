import React from "react";

function Heading({ children }) {
  return (
    <div
      style={{
        height: 150,
        clear: "both",
        paddingTop: 30,
        marginTop: 30,
        marginBottom: 5,
        textAlign: "center",
      }}
      className="jumbotron jumbotron-fluid border border-dark rounded"
    >
      {children}
    </div>
  );
}

export default Heading;
