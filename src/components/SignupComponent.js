import React, { Component } from "react";

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

//React Router Dom
import { Link } from "react-router-dom";

// React Redux Forms
import { Control, LocalForm, Errors, actions } from "react-redux-form";

// Redux Stuff
import { connect } from "react-redux";
import { userSignup, clearMessages } from "../redux";

// SweetAlert
import swal from "sweetalert";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (values) => {
    this.props.userSignup(values, this.props.history);
    this.props.resetForm();
  };

  showAlert = () => {
    if (this.props.user.successMessage) {
      swal({
        title: "Done",
        text: this.props.user.successMessage,
        icon: "success",
        button: "Ok",
      }).then((value) => {
        this.props.clearMessages();
      });
    }
    if (this.props.user.errorMessage) {
      swal({
        title: "Error",
        text: this.props.user.errorMessage,
        icon: "error",
        button: "Ok",
      }).then((value) => {
        this.props.clearMessages();
      });
    }
  };

  render() {
    const departments = [
      "Computer",
      "Civil",
      "Electronics",
      "Information Technology",
      "Instrumentation",
      "Mechanical",
      "Artificial intelligence",
      "Machine learning",
    ];

    const designation = ["HOD", "Incharge", "Professor", "Assistant Professor"];

    const required = (val) => val && val.length;
    const isChar = (val) => /^[a-z ,.'-]+$/i.test(val);
    const maxLength = (len) => (val) => !val || val.length <= len;
    const alphanumeric = (val) => /^[a-zA-Z0-9_]*$/.test(val);
    const isSelectDepartment = (val) => departments.includes(val);
    const isSelectDesignation = (val) => designation.includes(val);
    const isMatch = (val) => val === document.getElementById("password").value;

    this.showAlert();

    return (
      <div className="signupContainerBg">
        <div className="container">
          <Row className="justify-content-md-center align-items-center vh100">
            <Col xs lg="8">
              <LocalForm
                className="signupBg"
                model=".signupForm"
                onSubmit={(values) => this.handleSubmit(values)}
              >
                <h2 className="text-center">Signup</h2>
                <Row>
                  <Col lg="6">
                    <Form.Group controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Control.text
                        model=".firstname"
                        id="firstname"
                        name="firstname"
                        placeholder="First Name"
                        className="form-control"
                        validators={{
                          required,
                          isChar,
                          maxLength: maxLength(12),
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".firstname"
                        show="touched"
                        messages={{
                          required: "Cannot be empty!. ",
                          isChar: "Should only contain alphabets!. ",
                          maxLength: "Cannot be greater than 12!. ",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Control.text
                        model=".lastname"
                        id="lastname"
                        name="lastname"
                        placeholder="Last Name"
                        className="form-control"
                        validators={{
                          required,
                          isChar,
                          maxLength: maxLength(12),
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".lastname"
                        show="touched"
                        messages={{
                          required: "Cannot be empty!. ",
                          isChar: "Should only contain alphabets!. ",
                          maxLength: "Cannot be greater than 12!. ",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <Form.Group controlId="department">
                      <Form.Label>Department</Form.Label>
                      <Control.select
                        model=".department"
                        id="department"
                        name="department"
                        className="form-control"
                        validators={{ isSelectDepartment }}
                      >
                        <option disabled selected value>
                          {" "}
                          -- select an option --{" "}
                        </option>
                        <option>Computer</option>
                        <option>Civil</option>
                        <option>Electronics</option>
                        <option>Information Technology</option>
                        <option>Instrumentation</option>
                        <option>Mechanical</option>
                        <option>Artificial intelligence</option>
                        <option>Machine learning</option>
                      </Control.select>
                      <Errors
                        className="text-danger"
                        model=".department"
                        show="touched"
                        messages={{
                          isSelectDepartment: "Please Select a department",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group controlId="designation">
                      <Form.Label>Designation</Form.Label>
                      <Control.select
                        model=".designation"
                        id="designation"
                        name="designation"
                        className="form-control"
                        validators={{ isSelectDesignation }}
                      >
                        <option disabled selected value>
                          {" "}
                          -- select an option --{" "}
                        </option>
                        <option>HOD</option>
                        <option>Incharge</option>
                        <option>Professor</option>
                        <option>Assistant Professor</option>
                      </Control.select>
                      <Errors
                        className="text-danger"
                        model=".designation"
                        show="touched"
                        messages={{
                          isSelectDesignation: "Please Select a Designation",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Control.text
                    model=".username"
                    id="username"
                    name="username"
                    placeholder="Enter Username"
                    className="form-control"
                    validators={{
                      required,
                      alphanumeric,
                      maxLength: maxLength(12),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".username"
                    show="touched"
                    messages={{
                      required: "Cannot be empty!. ",
                      alphanumeric: "Should only contain alphanumeric!. ",
                      maxLength: "Cannot be greater than 12!. ",
                    }}
                  />
                </Form.Group>
                <Row>
                  <Col lg="6">
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Control.password
                        model=".password"
                        id="password"
                        name="password"
                        placeholder="Enter Passsword"
                        className="form-control"
                        validators={{
                          required,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".password"
                        show="touched"
                        messages={{
                          required: "Cannot be empty!. ",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group controlId="confirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Control.password
                        model=".confirmPassword"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Passsword"
                        className="form-control"
                        validators={{
                          required,
                          isMatch,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".confirmPassword"
                        show="touched"
                        messages={{
                          required: "Cannot be empty!. ",
                          isMatch: "Confirm Password don't match!. ",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="justify-content-md-center m-2">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={this.props.user.isLoading}
                    style={{ position: "relative" }}
                  >
                    Signup
                    {this.props.user.isLoading ? (
                      <Spinner
                        animation="border"
                        variant="light"
                        style={{
                          position: "absolute",
                          left: "17px",
                          top: "3px",
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </Button>
                </Row>
                <Row className="justify-content-md-center">
                  Already Have an account?
                  <Link to="/login" style={{ color: "#00baff" }}>
                    Login here.
                  </Link>
                </Row>
              </LocalForm>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  userSignup: (userData, history) => dispatch(userSignup(userData, history)),
  resetForm: () => {
    dispatch(actions.reset("signupForm"));
  },
  clearMessages: () => {
    dispatch(clearMessages());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
