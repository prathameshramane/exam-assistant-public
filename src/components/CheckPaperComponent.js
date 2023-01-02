import React from "react";

// React Bootstrap Stuff
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

//React Router Dom
import { Link } from "react-router-dom";

//Redux Stuff
import { connect } from "react-redux";

function NewRowData(props) {
  return props.examsArray.map((item) => (
    <tr key={item._id}>
      <td>{item.examId}</td>
      <td>{item.examName}</td>
      <td>{item.semester}</td>
      <td>{item.department}</td>
      <td>{item.subjectName}</td>
      <td>
        <Link to={"/checkpaper/" + item.examId}>
          <Button variant="success">Check Now</Button>
        </Link>
      </td>
      {/* <td>
        <Button variant="danger">Delete</Button>
      </td> */}
    </tr>
  ));
}

function CheckPaper(props) {
  return (
    <div className="contentHeight">
      <Container className="mt-2">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Check Paper</Breadcrumb.Item>
        </Breadcrumb>
        {props.examsArray.length !== 0 ? (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Exam Name</th>
                <th>Semester</th>
                <th>Department</th>
                <th>Subject</th>
                <th>Check Now</th>
                {/* <th>Delete Exam</th> */}
              </tr>
            </thead>
            <tbody>
              <NewRowData examsArray={props.examsArray} />
            </tbody>
          </Table>
        ) : (
          <h1>Please add an exam first</h1>
        )}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  examsArray: state.user.userCredentials.exams,
});

export default connect(mapStateToProps)(CheckPaper);
