import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Components
import Login from "./LoginComponent";
import Signup from "./SignupComponent";
import AuthRoute from "../utils/AuthRoute";
import Dashboard from "./DashboardComponent";
import AddExam from "./AddExamComponent";
import CheckPaper from "./CheckPaperComponent";
import CheckOneExam from "./CheckOneExamComponent";
import AnalyseResult from "./AnalyseResultComponent";
import IndividualMarks from "./IndividualMarksComponent";
import Header from "./Header";
import Footer from "./Footer";

// Redux Stuff
import { connect } from "react-redux";
import { logoutUser } from "../redux";

import jwtDecode from "jwt-decode";

//Redux Stuff
import { getUserDetails, setAuthorizationHeaders } from "../redux";
import store from "../redux/store";

const token = localStorage.IdToken;
console.log(token);
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    // store.dispatch(logoutUser());
    console.log("Expired");
  } else {
    setAuthorizationHeaders(token);
    store.dispatch(getUserDetails());
  }
}

export class Main extends Component {
  render() {
    const profile = this.props.isAuthenticated ? (
      <div>
        {this.props.user.firstname} {this.props.user.lastname}
      </div>
    ) : null;
    return (
      <div>
        {profile !== null ? (
          <div>
            <Header
              profile={profile}
              logoutUser={() => this.props.logoutUser(this.props.history)}
            />
            <Redirect to="/dashboard" />
          </div>
        ) : (
          <Redirect to="/login" />
        )}
        <Switch>
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addexam" component={AddExam} />
          <Route exact path="/checkpaper" component={CheckPaper} />
          <Route exact path="/checkpaper/:examId" component={CheckOneExam} />
          <Route exact path="/analyseresult" component={AnalyseResult} />
          <Route exact path="/individualmarks" component={IndividualMarks} />
        </Switch>
        {profile !== null ? <Footer /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.userCredentials,
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: (history) => {
    dispatch(logoutUser(history));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
