import React from "react";

//React Bootstrap Stuff
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

//React Router Dom
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="contentHeight">
      <Container>
        <Row>
          <Col xs lg="4">
            <Link to="/addexam">
              <Card
                bg="primary"
                text="white"
                style={{ minWidth: "18rem" }}
                className="m-2 py-1 px-3"
              >
                <Card.Body>
                  <div className="text-center m-1">
                    <i className="fa fa-book fa-5x"></i>
                  </div>
                  <h2 className="text-center Balsamiq">Add Exam</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs lg="4">
            <Link to="/checkpaper">
              <Card
                bg="success"
                text="white"
                style={{ minWidth: "18rem" }}
                className="m-2 py-1 px-3"
              >
                <Card.Body>
                  <div className="text-center m-1">
                    <i className="fa fa-check-square fa-5x"></i>
                  </div>
                  <h2 className="text-center Balsamiq">Check Paper</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs lg="4">
            <Link to="/analyseresult">
              <Card
                bg="danger"
                text="white"
                style={{ minWidth: "18rem" }}
                className="m-2 py-1 px-3"
              >
                <Card.Body>
                  <div className="text-center m-1">
                    <i className="fa fa-bar-chart fa-5x"></i>
                  </div>
                  <h2 className="text-center Balsamiq">Analyse Result</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          {/* <Col xs lg="4">
            <Link to="/individualmarks">
              <Card
                bg="warning"
                text="white"
                style={{ minWidth: "18rem" }}
                className="m-2 py-1 px-3"
              >
                <Card.Body>
                  <div className="text-center m-1">
                    <i className="fa fa-pie-chart fa-5x"></i>
                  </div>
                  <h2 className="text-center Balsamiq">Individual Marks</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
