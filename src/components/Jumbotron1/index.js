import React from "react";

function Jumbotron1({ children }) {
  return (
    <div
      style={{
        height: 400,
        clear: "both",
        paddingTop: 50,
        paddingBottom: 0,
        marginBottom: 10,
        textAlign: "center",
      }}
      className="jumbotron jumbotron-fluid"
    >
      {children}
    </div>
  );
}

export default Jumbotron1;
