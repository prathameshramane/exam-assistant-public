import React from "react";

// React Bootstrap
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "80vh", flexDirection: "column" }}
    >
      <Spinner animation="border" style={{ width: "5rem", height: "5rem" }} />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
