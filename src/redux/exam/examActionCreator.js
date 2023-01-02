import axios from "axios";
import { baseUrl } from "../configs";

import {
  ADD_EXAM_REQUEST,
  ADD_EXAM_SUCCESS,
  ADD_EXAM_FAILURE,
  GET_EXAM_REQUEST,
  GET_EXAM_SUCCESS,
  GET_EXAM_FAILURE,
  UPDATE_EXAM_DATA_REQUEST,
  UPDATE_EXAM_DATA_SUCCESS,
  UPDATE_EXAM_DATA_FAILURE,
  CLEAR_MESSAGES,
} from "./examActionTypes";

const addExamRequest = () => {
  return {
    type: ADD_EXAM_REQUEST,
  };
};

const addExamSuccess = (response) => {
  return {
    type: ADD_EXAM_SUCCESS,
    payload: response,
  };
};

const addExamFailure = (error) => {
  return {
    type: ADD_EXAM_FAILURE,
    payload: error,
  };
};

export const addExam = (formData, history) => (dispatch) => {
  dispatch(addExamRequest());
  axios
    .post(baseUrl + "/exams", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispatch(addExamSuccess(res.data));
    })
    .catch((err) => {
      dispatch(addExamFailure(err.response.data));
    });
};

const getExamRequest = () => {
  return {
    type: GET_EXAM_REQUEST,
  };
};

const getExamSuccess = (response) => {
  return {
    type: GET_EXAM_SUCCESS,
    payload: response,
  };
};

const getExamFailure = (error) => {
  return {
    type: GET_EXAM_FAILURE,
    payload: error,
  };
};

export const getExam = (examId) => (dispatch) => {
  dispatch(getExamRequest());
  axios
    .get(baseUrl + "/exams/" + examId)
    .then((res) => {
      dispatch(getExamSuccess(res.data));
    })
    .catch((err) => {
      console.log("Error : ", err);
      dispatch(getExamFailure({ message: "Somethoing Went Wrong" }));
    });
};

const updateExamDataRequest = () => {
  return {
    type: UPDATE_EXAM_DATA_REQUEST,
  };
};

const updateExamDataSuccess = (response) => {
  return {
    type: UPDATE_EXAM_DATA_SUCCESS,
    payload: response,
  };
};

const updateExamDataFailure = (error) => {
  return {
    type: UPDATE_EXAM_DATA_FAILURE,
    payload: error,
  };
};

export const updataExamData = (examData, examId) => (dispatch) => {
  dispatch(updateExamDataRequest());
  console.log("From Axios : ", examData);
  axios
    .post(baseUrl + "/exams/" + examId, examData)
    .then((res) => {
      dispatch(updateExamDataSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      if (err.response) {
        dispatch(updateExamDataFailure(err.response.data));
        console.log(err.response.data);
      } else {
        console.log(err);
      }
    });
};

export const clearExamMessages = () => {
  return {
    type: CLEAR_MESSAGES,
  };
};

