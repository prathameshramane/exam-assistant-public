import React, { Component } from "react";

//React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

// React Router Dom
import { Link } from "react-router-dom";

//Redux Stuff
import { connect } from "react-redux";
import { getExam, clearExamMessages, updataExamData } from "../redux";

//Loading Component
import Loading from "./LoadingComponent";

function StudentInformation(props) {
  return (
    <Card.Body>
      <Row>
        <Col>
          <Card.Title>Email</Card.Title>
          <Card.Text>
            {props.currentStudent !== null
              ? props.currentStudent.email
              : "Loading..."}
          </Card.Text>
        </Col>
        <Col>
          <Card.Title>First Name</Card.Title>
          <Card.Text>
            {props.currentStudent !== null
              ? props.currentStudent.firstName
              : "Loading..."}
          </Card.Text>
        </Col>
        <Col>
          <Card.Title>Last Name</Card.Title>
          <Card.Text>
            {props.currentStudent !== null
              ? props.currentStudent.lastName
              : "Loading..."}
          </Card.Text>
        </Col>
        <Col>
          <Card.Title>Seat Number</Card.Title>
          <Card.Text>
            {props.currentStudent !== null
              ? props.currentStudent.seatNo
              : "Loading..."}
          </Card.Text>
        </Col>
        <Col>
          <Card.Title>Department</Card.Title>
          <Card.Text>
            {props.currentStudent !== null
              ? props.currentStudent.department
              : "Loading..."}
          </Card.Text>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md="6">
          <iframe
            src={
              props.currentStudent !== null
                ? "https://drive.google.com/file/d/" +
                  props.currentStudent.paperUrl +
                  "/preview"
                : ""
            }
            width="540px"
            height="720px"
          ></iframe>
        </Col>
        <Col md="6">
          <h3>Enter Marks</h3>
          <hr />
          <MarksComponent
            examObject={
              props.currentStudent !== null
                ? props.currentStudent.marksObject
                : null
            }
            handleMarksChange={props.handleMarksChange}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Button
          variant="success"
          onClick={props.handleSaveProgress}
          disabled={props.isUpdaing}
          style={{ position: "relative" }}
        >
          Save Current Progress
          {props.isUpdaing ? (
            <Spinner
              animation="border"
              variant="light"
              style={{ position: "absolute", left: "80px", top: "3px" }}
            />
          ) : (
            ""
          )}
        </Button>
      </Row>
    </Card.Body>
  );
}

function MarksComponent(props) {
  const examObject =
    props.examObject !== null ? JSON.parse(props.examObject) : null;
  if (examObject !== null) {
    return (
      <Form>
        {examObject[1] ? (
          <>
            <h5>Question 1 (Max Marks: {examObject[1].Marks})</h5>
            <Form.Row>
              {examObject[1].A !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question A</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    key="1-A"
                    value={examObject[1].A}
                    id="1-A"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[1].B !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question B</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[1].B}
                    id="1-B"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[1].C !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question C</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[1].C}
                    id="1-C"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[1].D !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question D</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[1].D}
                    id="1-D"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[1].E !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question E</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[1].E}
                    id="1-E"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[1].F !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question F</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[1].F}
                    id="1-F"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
            </Form.Row>
            <hr />
          </>
        ) : (
          ""
        )}
        {examObject[2] ? (
          <>
            <h5>Question 2 (Max Marks: {examObject[2].Marks})</h5>
            <Form.Row>
              {examObject[2].A !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question A</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    de
                    value={examObject[2].A}
                    id="2-A"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[2].B !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question B</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[2].B}
                    id="2-B"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[2].C !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question C</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[2].C}
                    id="2-C"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[2].D !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question D</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[2].D}
                    id="2-D"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[2].E !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question E</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[3].E}
                    id="2-E"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[2].F !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question F</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[2].F}
                    id="2-F"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
            </Form.Row>
            <hr />
          </>
        ) : (
          ""
        )}
        {examObject[3] ? (
          <>
            <h5>Question 3 (Max Marks: {examObject[3].Marks})</h5>
            <Form.Row>
              {examObject[3].A !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question A</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[3].A}
                    id="3-A"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[3].B !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question B</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[3].B}
                    id="3-B"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[3].C !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question C</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[3].C}
                    id="3-C"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[3].D !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question D</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[3].D}
                    id="3-D"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[3].E !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question E</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[3].E}
                    id="3-E"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[3].F !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question F</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[3].F}
                    id="3-F"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
            </Form.Row>
            <hr />
          </>
        ) : (
          ""
        )}
        {examObject[4] ? (
          <>
            <h5>Question 4 (Max Marks: {examObject[4].Marks})</h5>
            <Form.Row>
              {examObject[4].A !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question A</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[4].A}
                    id="4-A"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[4].B !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question B</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[4].B}
                    id="4-B"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[4].C !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question C</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[4].C}
                    id="4-C"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[4].D !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question D</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[4].D}
                    id="4-D"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[4].E !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question E</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[4].E}
                    id="4-E"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[4].F !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question F</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[4].F}
                    id="4-F"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
            </Form.Row>
            <hr />
          </>
        ) : (
          ""
        )}
        {examObject[5] ? (
          <>
            <h5>Question 5 (Max Marks: {examObject[5].Marks})</h5>
            <Form.Row>
              {examObject[5].A !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question A</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[5].A}
                    id="5-A"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[5].B !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question B</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[5].B}
                    id="5-B"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[5].C !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question C</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[5].C}
                    id="5-C"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[5].D !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question D</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[5].D}
                    id="5-D"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[5].E !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question E</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[5].E}
                    id="5-E"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[5].F !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question F</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[5].F}
                    id="5-F"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
            </Form.Row>
            <hr />
          </>
        ) : (
          ""
        )}
        {examObject[6] ? (
          <>
            <h5>Question 6 (Max Marks: {examObject[6].Marks})</h5>
            <Form.Row>
              {examObject[6].A !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question A</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[6].A}
                    id="6-A"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[6].B !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question B</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[6].B}
                    id="6-B"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[6].C !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question C</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[6].C}
                    id="6-C"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[6].D !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question D</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[6].D}
                    id="6-D"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[6].E !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question E</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[6].E}
                    id="6-E"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[6].F !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question F</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[6].F}
                    id="6-F"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
            </Form.Row>
            <hr />
          </>
        ) : (
          ""
        )}
        {examObject[7] ? (
          <>
            <h5>Question 7 (Max Marks: {examObject[7].Marks})</h5>
            <Form.Row>
              {examObject[7].A !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question A</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[7].A}
                    id="7-A"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[7].B !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question B</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[7].B}
                    id="7-B"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[7].C !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question C</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[7].C}
                    id="7-C"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[7].D !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question D</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[7].D}
                    id="7-D"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[7].E !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question E</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[7].E}
                    id="7-E"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[7].F !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question F</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    value={examObject[7].F}
                    id="7-F"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
            </Form.Row>
            <hr />
          </>
        ) : (
          ""
        )}
        {examObject[8] ? (
          <>
            <h5>Question 8 (Max Marks: {examObject[8].Marks})</h5>
            <Form.Row>
              {examObject[8].A !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question A</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    defaultValue={examObject[8].A}
                    id="8-A"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[8].B !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question B</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    defaultValue={examObject[8].B}
                    id="8-B"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[8].C !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question C</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    defaultValue={examObject[8].C}
                    id="8-C"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[8].D !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question D</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    defaultValue={examObject[8].D}
                    id="8-D"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[8].E !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question E</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    defaultValue={examObject[8].E}
                    id="8-E"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
              {examObject[8].F !== undefined ? (
                <Form.Group as={Col}>
                  <Form.Label>Sub-Question F</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max="20"
                    defaultValue={examObject[8].F}
                    id="8-F"
                    onChange={props.handleMarksChange}
                  />
                </Form.Group>
              ) : (
                ""
              )}
            </Form.Row>
            <hr />
          </>
        ) : (
          ""
        )}
      </Form>
    );
  } else {
    return <div>Loading</div>;
  }
}

export class CheckOneExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedExam: this.props.exam.selectedExam,
      examData:
        this.props.exam.selectedExam !== null
          ? this.props.exam.selectedExam.examData
          : null,
      currentStudent:
        this.props.exam.selectedExam !== null
          ? this.props.exam.selectedExam.examData[0]
          : null,
    };
    this.handleMarksChange = this.handleMarksChange.bind(this);
    this.changeStudent = this.changeStudent.bind(this);
    this.handleSaveProgress = this.handleSaveProgress.bind(this);
  }

  componentDidMount() {
    this.props.getExam(this.props.match.params.examId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.exam.selectedExam !== prevProps.exam.selectedExam) {
      this.setState({ selectedExam: this.props.exam.selectedExam });
    }
    if (this.props.exam.selectedExam !== prevProps.exam.selectedExam) {
      this.setState({ examData: this.props.exam.selectedExam.examData });
    }
    if (this.props.exam.selectedExam !== prevProps.exam.selectedExam) {
      this.setState({
        currentStudent: this.props.exam.selectedExam.examData[0],
      });
    }
  }

  changeStudent(value) {
    var indexOfNewStudent;
    if (
      this.state.examData.indexOf(this.state.currentStudent) + parseInt(value) <
      0
    ) {
      indexOfNewStudent = 0;
    } else if (
      this.state.examData.indexOf(this.state.currentStudent) + parseInt(value) >
      this.state.examData.length
    ) {
      indexOfNewStudent = this.state.examData.length - 1;
    } else {
      indexOfNewStudent =
        this.state.examData.indexOf(this.state.currentStudent) +
        parseInt(value);
    }
    this.setState({
      currentStudent: this.state.examData[indexOfNewStudent],
    });
  }

  handleMarksChange(e) {
    const markToUpdate = e.target.id.split("-");
    if (this.state.currentStudent !== null) {
      const marksObj = JSON.parse(this.state.currentStudent.marksObject);
      marksObj[markToUpdate[0]][markToUpdate[1]] = e.target.value;
      var updatedStudent = this.state.currentStudent;
      updatedStudent.marksObject = JSON.stringify(marksObj);
      this.setState({ currentStudent: updatedStudent });
    }
  }

  handleSaveProgress(e) {
    var data = { examData: JSON.stringify(this.state.examData) };
    this.props.updataExamData(data, this.state.selectedExam._id);
  }

  render() {
    return (
      <div className="contentHeight">
        {this.props.exam.selectedExam === null || this.props.exam.isLoading ? (
          <Loading />
        ) : (
          <Container className="mt-2">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/dashboard">Dashboard</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/checkpaper">Check Paper</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {this.props.match.params.examId}
              </Breadcrumb.Item>
            </Breadcrumb>
            <Card border="primary" style={{ width: "100%" }} className="mt-2">
              <Card.Header>
                <h3 className="text-center">Exam Information</h3>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Exam name</Card.Title>
                    <Card.Text>
                      {this.state.selectedExam !== null
                        ? this.state.selectedExam.examName
                        : "Loading..."}
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Title>Semester</Card.Title>
                    <Card.Text>
                      {this.state.selectedExam !== null
                        ? this.state.selectedExam.semester
                        : "Loading..."}
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Title>Department</Card.Title>
                    <Card.Text>
                      {this.state.selectedExam !== null
                        ? this.state.selectedExam.department
                        : "Loading..."}
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Title>Subject</Card.Title>
                    <Card.Text>
                      {this.state.selectedExam !== null
                        ? this.state.selectedExam.subjectName
                        : "Loading..."}
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Title>Total Marks</Card.Title>
                    <Card.Text>
                      {this.state.selectedExam !== null
                        ? this.state.selectedExam.totalMarks
                        : "Loading..."}
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card
              border="primary"
              style={{ width: "100%" }}
              className="mt-2 mb-4"
              style={{ position: "relative" }}
            >
              <Card.Header>
                <h3 className="text-center">Student Information</h3>
              </Card.Header>
              <StudentInformation
                currentStudent={this.state.currentStudent}
                handleMarksChange={this.handleMarksChange}
                handleSaveProgress={this.handleSaveProgress}
                isUpdaing={this.props.exam.isUpdaing}
              />
              <Button
                variant="outline-secondary"
                className="hover-black"
                style={{ padding: "0rem" }}
                onClick={() => this.changeStudent(-1)}
                disabled={
                  this.state.currentStudent !== null
                    ? this.state.examData.indexOf(this.state.currentStudent) ===
                      0
                    : true
                }
              >
                <i
                  class="fa fa-chevron-left fa-2x"
                  aria-hidden="true"
                  style={{ position: "absolute", top: "30rem", left: "-4rem" }}
                ></i>
              </Button>
              <Button
                variant="outline-secondary"
                className="hover-black"
                style={{ padding: "0rem" }}
                onClick={() => this.changeStudent(1)}
                disabled={
                  this.state.currentStudent !== null
                    ? this.state.examData.indexOf(this.state.currentStudent) ===
                      this.state.examData.length - 1
                    : true
                }
              >
                {" "}
                <i
                  class="fa fa-chevron-right fa-2x"
                  aria-hidden="true"
                  style={{ position: "absolute", top: "30rem", right: "-4rem" }}
                ></i>
              </Button>
            </Card>
          </Container>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  exam: state.exam,
});

const mapDispatchToProps = (dispatch) => ({
  getExam: (examId) => {
    dispatch(getExam(examId));
  },
  clearExamMessages: () => {
    dispatch(clearExamMessages());
  },
  updataExamData: (examData, examId) => {
    dispatch(updataExamData(examData, examId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOneExam);
