import axios from "axios";
import Configs, { baseUrl } from "../configs";

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  CLEAR_MESSAGES,
  LOGOUT_USER,
} from "./userActionTypes";

const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

const userLoginSuccess = (response) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: response,
  };
};

const userLoginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: error,
  };
};

export const setAuthorizationHeaders = (token) => {
  axios.defaults.headers.common["Authorization"] = token;
};

export const userLogin = (userData, history) => (dispatch) => {
  dispatch(userLoginRequest());
  axios
    .post(Configs.baseUrl + "/users/login", userData)
    .then((res) => {
      const token = `Bearer ${res.data.token}`;
      localStorage.setItem("IdToken", token);
      setAuthorizationHeaders(token);
      dispatch(userLoginSuccess(res.data));
      history.push("/dashboard");
    })
    .catch((err) => {
      dispatch(userLoginFailure(err.response.data.err));
    });
};

const userSignupRequest = () => {
  return {
    type: USER_SIGNUP_REQUEST,
  };
};

const userSignupSuccess = (response) => {
  return {
    type: USER_SIGNUP_SUCCESS,
    payload: response,
  };
};

const userSignupFailure = (response) => {
  return {
    type: USER_SIGNUP_FAILURE,
    payload: response,
  };
};

export const userSignup = (userData, history) => (dispatch) => {
  dispatch(userSignupRequest());
  console.log("Disptach", userData);
  axios
    .post(Configs.baseUrl + "/users/signup", userData)
    .then((res) => {
      dispatch(userSignupSuccess(res.data));
    })
    .catch((err) => {
      dispatch(userSignupFailure(err.response.data));
    });
};

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES,
  };
};

const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

const getUserSuccess = (response) => {
  return {
    type: GET_USER_SUCCESS,
    payload: response,
  };
};

const getUserFailure = (error) => {
  return {
    type: GET_USER_FAILURE,
    payload: error,
  };
};

export const getUserDetails = () => (dispatch) => {
  dispatch(getUserRequest());
  axios
    .get(baseUrl + "/users")
    .then((res) => {
      const user = res.data;
      dispatch(getUserSuccess(user));
    })
    .catch((err) => {
      dispatch(getUserFailure(err.response.data));
    });
};

export const logoutUser = (history) => {
  delete localStorage.IdToken;
  delete axios.defaults.headers.common["Authorization"];
  window.location.href = "/";
  return {
    type: LOGOUT_USER,
  };
};
