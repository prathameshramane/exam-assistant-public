import React from "react";

//React Bootstrap Stuff
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

// React Router Dom
import { Link } from "react-router-dom";

//Images
import logo from "../images/logo.png";

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <i
            
            className="d-inline-block align-center fa fa-graduation-cap fa-lg"
          ></i>{" "}
          {props.profile !== null ? (
            <Link to="/dashboard" className="text-white">
              Exam Assistant Application
            </Link>
          ) : (
            <Link to="/login" className="text-white">
              Exam Assistant Application
            </Link>
          )}
        </Navbar.Brand>
        {props.profile !== null ? (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="d-flex mr-3 text-white userText">
              Welcome, {props.profile}
            </Navbar.Text>
            <Button
              variant="outline-warning"
              onClick={() => props.logoutUser(props.history)}
            >
              Logout
            </Button>
          </Navbar.Collapse>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
