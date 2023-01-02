import React from "react";

// React Bootstrap
import Spinner from "react-bootstrap/Spinner";

function LowOpacityLoader() {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%", background:"rgb(255 255 255 / 70%)", top:"0px" }}>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ flexDirection: "column", zIndex: "10", height: "100vh" }}
      >
        <Spinner animation="border" style={{ width: "5rem", height: "5rem" }} />
        <p className="mt-2">Downloading...</p>
      </div>
    </div>
  );
}

export default LowOpacityLoader;
