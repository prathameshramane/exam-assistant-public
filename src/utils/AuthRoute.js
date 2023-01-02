import React from "react";
import { Route, Redirect } from "react-router-dom";

//Redux
import { connect } from "react-redux";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? <Redirect to="/dashboard" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({
  authenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(AuthRoute);
