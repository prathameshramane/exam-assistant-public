import React from "react";

// React Bootstrap Stuff
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

//React Router Dom
import { Link } from "react-router-dom";

function IndividualMarks() {
  return (
    <div className="contentHeight">
      <Container className="mt-2">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Individual Marks</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Individual Marks</h1>
      </Container>
    </div>
  );
}

export default IndividualMarks;
