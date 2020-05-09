import React from "react";

function SearchBar({ children }) {
  return (
    <div
      style={{
        height: 150,
        clear: "both",
        paddingTop: 10,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 0,
        textAlign: "center",
      }}
      className="jumbotron jumbotron-fluid border border-dark rounded"
    >
      {children}
    </div>
  );
}

export default SearchBar;
