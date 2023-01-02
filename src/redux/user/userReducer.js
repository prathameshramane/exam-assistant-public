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

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  userCredentials: null,
  isAuthenticated: false,
  successMessage: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        userCredentials: action.payload.userCredentials,
        successMessage: action.payload.status,
        isError: false,
        errorMessage: null,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: "Username or Password incorrect!",
      };

    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
        successMessage: action.payload.status,
      };

    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.err.message,
      };

    case CLEAR_MESSAGES:
      return { ...state, successMessage: null, errorMessage: null };

    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        userCredentials: action.payload,
        isError: false,
        errorMessage: null,
      };

    case GET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        userCredentials: null,
      };

    default:
      return state;
  }
};
