import React, { Component } from "react";

// React Bootstrap Stuff
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

//React Router Dom
import { Link } from "react-router-dom";

//Redux Stuff
import { connect } from "react-redux";
import { getExam, clearExamMessages } from "../redux";

// Utils
import { downloadAsExcel } from "../utils/json-excel";
import { processFullData, processPartialData } from "../utils/processJsonData";
import LowOpacityLoader from "./LowOpacityLoader";

function NewRowData(props) {
  return props.examsArray.map((item) => (
    <tr key={item._id}>
      <td>{item.examId}</td>
      <td>{item.examName}</td>
      <td>{item.semester}</td>
      <td>{item.department}</td>
      <td>{item.subjectName}</td>
      <td className="text-center">
        <Button
          variant="success"
          onClick={() => props.handleFullDownload(item.examId)}
        >
          Download
          <i className="fa fa-download px-2" aria-hidden="true"></i>
        </Button>
      </td>
      <td className="text-center">
        <Button
          variant="success"
          onClick={() => props.handlePartialDownload(item.examId)}
        >
          Download
          <i className="fa fa-download px-2" aria-hidden="true"></i>
        </Button>
      </td>
    </tr>
  ));
}

class AnalyseResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedExam: this.props.exam.selectedExam,
      downloadNow: false,
      partialData: false,
      fullData: false,
    };
    this.handleFullDownload = this.handleFullDownload.bind(this);
    this.handlePartialDownload = this.handlePartialDownload.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.exam.selectedExam !== prevProps.exam.selectedExam) {
      this.setState({ selectedExam: this.props.exam.selectedExam });
      this.setState({ downloadNow: true });
    }
  }

  handleFullDownload(examId) {
    this.props.getExam(examId);
    this.setState({ fullData: true });
  }

  handlePartialDownload(examId) {
    this.props.getExam(examId);
    this.setState({ partialData: true });
  }

  render() {
    if (this.state.downloadNow && this.state.fullData) {
      this.setState({ downloadNow: false });
      this.setState({ fullData: false });
      const data = processFullData(this.state.selectedExam);
      const filename =
        this.state.selectedExam.subjectName +
        "(" +
        this.state.selectedExam.examName +
        `) - ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
      downloadAsExcel(data, filename);
    }
    if (this.state.downloadNow && this.state.partialData) {
      this.setState({ downloadNow: false });
      this.setState({ partialData: false });
      const data = processPartialData(this.state.selectedExam);
      const filename =
        this.state.selectedExam.subjectName +
        "(" +
        this.state.selectedExam.examName +
        `) - ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
      downloadAsExcel(data, filename);
    }
    return (
      <div className="contentHeight">
        {this.props.exam.isLoading ? <LowOpacityLoader /> : null}
        <Container className="mt-2">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/dashboard">Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Analyse Result</Breadcrumb.Item>
          </Breadcrumb>
          {this.props.examsArray.length !== 0 ? (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Exam Name</th>
                  <th>Semester</th>
                  <th>Department</th>
                  <th>Subject</th>
                  <th>Complete Data</th>
                  <th>Partial Data</th>
                </tr>
              </thead>
              <tbody>
                <NewRowData
                  examsArray={this.props.examsArray}
                  handleFullDownload={this.handleFullDownload}
                  handlePartialDownload={this.handlePartialDownload}
                />
              </tbody>
            </Table>
          ) : (
            <h1>Please add an exam first</h1>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  examsArray: state.user.userCredentials.exams,
  exam: state.exam,
});

const mapDispatchToProps = (dispatch) => ({
  getExam: (examId) => {
    dispatch(getExam(examId));
  },
  clearExamMessages: () => {
    dispatch(clearExamMessages());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyseResult);
