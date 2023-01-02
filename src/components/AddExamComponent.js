import React, { useState } from "react";

// React Bootstrap
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

//React Drop file
import StyledDropzone from "../utils/acceptFile";

// React Router Dom
import { Link } from "react-router-dom";

//Redux Stuff
import { connect } from "react-redux";
import { LocalForm, Control, actions } from "react-redux-form";
import { addExam, clearExamMessages } from "../redux";

// SweetAlert
import swal from "sweetalert";

function Quetions(props) {
  var arr = Array.from(
    { length: props.questionNumber },
    (_, index) => index + 1
  );
  console.log();
  return arr.map((qNumber) => (
    <Form.Row key={qNumber} className="mt-3">
      <Form.Group as={Col}>
        <Form.Label>Question Number</Form.Label>
        <Control.text
          model={".question" + qNumber}
          id={"question" + qNumber}
          name={"question" + qNumber}
          value={qNumber}
          className="form-control"
          disabled
        />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Number of Subquestion</Form.Label>
        <Control
          type="number"
          className="form-control"
          model={".subQuestion" + qNumber}
          id={"subQuestion" + qNumber}
          name={"subQuestion" + qNumber}
          min="1"
          max="5"
          defaultValue="1"
        />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Marks</Form.Label>
        <Control
          type="number"
          className="form-control"
          model={".questionMarks" + qNumber}
          id={"questionMarks" + qNumber}
          min="1"
          max="20"
          defaultValue="1"
          name={"questionMarks" + qNumber}
        />
      </Form.Group>
    </Form.Row>
  ));
}

function AddExam(props) {
  const [numOfQuesions, setNumOfQuesions] = useState(0);
  const [excelFile, setExcelFile] = useState(null);

  const handlenNumQuestions = (e) => {
    setNumOfQuesions(e.target.value);
  };

  const handleSubmit = (values, e) => {
    var formData = new FormData();
    formData.append("excelFile", excelFile);
    for (const key in values) {
      formData.append(key, values[key]);
    }
    props.addExam(formData);
    props.resetForm();
  };

  const showAlert = () => {
    if (props.exam.successMessage) {
      swal({
        title: "Done",
        text: props.exam.successMessage,
        icon: "success",
        button: "Ok",
      }).then((value) => {
        props.clearExamMessages();
        props.history.push("/dashboard")
      });
    }
    if (props.exam.errorMessage) {
      swal({
        title: "Error",
        text: props.exam.errorMessage,
        icon: "error",
        button: "Ok",
      }).then((value) => {
        props.clearExamMessages();
      });
    }
  };

  const onChangeFile = (e) => {
    setExcelFile(e.target.files[0]);
    swal({
      title: "Done",
      text: "File " + e.target.files[0].name + " uploaded successfully",
      icon: "success",
      button: "Ok",
    });
  };

  showAlert();

  return (
    <div className="contentHeight">
      <Container className="mt-2">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Add Exam</Breadcrumb.Item>
        </Breadcrumb>
        <LocalForm
          onSubmit={(values) => handleSubmit(values)}
          model=".addExamForm"
        >
          <Form.Row>
            <Form.Group as={Col} controlId="examtName">
              <Form.Label>Exam Name</Form.Label>
              <Form.Text className="text-muted">
                The exam name will be used to refer the exam while checking and
                analysing process
              </Form.Text>
              <Control.text
                model=".examName"
                id="examName"
                name="examName"
                placeholder="Exam Name here"
                className="form-control"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="semester">
              <Form.Label>Semester</Form.Label>
              <Control.select
                model=".semester"
                id="semester"
                name="semester"
                className="form-control"
                defaultValue="Select a semester"
              >
                <option disabled disabled selected value>
                  Select a semester
                </option>
                <option>SEM-I</option>
                <option>SEM-II</option>
                <option>SEM-III</option>
                <option>SEM-IV</option>
                <option>SEM-V</option>
                <option>SEM-VI</option>
                <option>SEM-VII</option>
                <option>SEM-VII</option>
              </Control.select>
            </Form.Group>

            <Form.Group as={Col} controlId="department">
              <Form.Label>Department</Form.Label>
              <Control.select
                model=".department"
                id="department"
                name="department"
                className="form-control"
                defaultValue="Select a Deapartment"
              >
                <option disabled selected value>
                  Select a Deapartment
                </option>
                <option>Computer Department</option>
                <option>IT Department</option>
                <option>EXTC Department</option>
                <option>Civil Department</option>
                <option>Instrumentation Department</option>
                <option>Mechanical Department</option>
              </Control.select>
            </Form.Group>

            <Form.Group as={Col} controlId="subjectName">
              <Form.Label>Subject Name</Form.Label>
              <Control.text
                model=".subjectName"
                id="subjectName"
                name="subjectName"
                className="form-control"
              />
            </Form.Group>
          </Form.Row>
          <hr />
          <Form.Row>
            <Form.Label>Students exam data</Form.Label>
            <Form.Text className="text-muted">
              &nbsp;&nbsp; (Upload the excel sheet from google forms)
            </Form.Text>
            <StyledDropzone onChangeFile={(e) => onChangeFile(e)} />
          </Form.Row>
          <Form.Row className="mt-2">
            <Form.Group as={Col}>
              <Form.Label>Number of questions</Form.Label>
              <Control
                type="number"
                className="form-control"
                model=".numOfQuestions"
                id="numOfQuestions"
                name="numOfQuestions"
                onChange={handlenNumQuestions}
                min="1"
                max="6"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Total Marks</Form.Label>
              <Control
                type="number"
                className="form-control"
                model=".totalMarks"
                id="totalMarks"
                name="totalMarks"
                min="0"
                max="140"
              />
            </Form.Group>
          </Form.Row>
          <hr />
          <Quetions questionNumber={numOfQuesions} />
          <Row className="justify-content-center mt-2 mb-4">
            <Button
              variant="primary"
              type="submit"
              disabled={props.exam.isLoading}
              style={{ position: "relative", width: "10rem" }}
            >
              Submit
              {props.exam.isLoading ? (
                <Spinner
                  animation="border"
                  variant="light"
                  style={{ position: "absolute", left: "66px", top: "3px" }}
                />
              ) : (
                ""
              )}
            </Button>
          </Row>
        </LocalForm>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  exam: state.exam,
});

const mapDispatchToProps = (dispatch) => ({
  addExam: (formData, history) => dispatch(addExam(formData, history)),
  resetForm: () => {
    dispatch(actions.reset("addExamForm"));
  },
  clearExamMessages: () => {
    dispatch(clearExamMessages());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExam);
