import React, { Component } from "react";

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from 'react-bootstrap/Spinner'

//React Router Dom
import { Link, Redirect } from "react-router-dom";

// React Redux Forms
import { Control, LocalForm, Errors, actions } from "react-redux-form";

// Redux Stuff
import { connect } from "react-redux";
import { userLogin, clearMessages } from "../redux";

// SweetAlert
import swal from "sweetalert";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (values) => {
    this.props.userLogin(values, this.props.history);
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
    const required = (val) => val && val.length;
    const alphanumeric = (val) => /^[a-zA-Z0-9_]*$/.test(val);
    const maxLength = (len) => (val) => !val || val.length <= len;

    this.showAlert();

    return (
      <div className="loginContainerBg">
        <div className="container">
          <Row className="justify-content-md-center align-items-center vh100">
            <Col xs lg="6">
              <LocalForm
                model="loginForm"
                className="loginBg"
                onSubmit={(values) => this.handleSubmit(values)}
              >
                <h2 className="text-center">Login</h2>
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
                <Row className="justify-content-md-center m-2">
                  <Button variant="primary" type="submit" disabled={this.props.user.isLoading} style={{position:"relative"}}>
                    Login{this.props.user.isLoading ? <Spinner animation="border" variant="light" style={{position:"absolute", left:"17px", top:"3px"}}/> : ""}
                  </Button>
                </Row>
                <Row className="justify-content-md-center">
                  Don't Have an account?{" "}
                  <Link to="/signup" style={{ color: "#00baff" }}>
                    Signup here.
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
  userLogin: (userData, history) => dispatch(userLogin(userData, history)),
  resetForm: () => {
    dispatch(actions.reset("loginForm"));
  },
  clearMessages: () => {
    dispatch(clearMessages());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
