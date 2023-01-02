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

const initialState = {
  isLoading: false,
  selectedExam: null,
  errorMessage: null,
  isError: false,
  successMessage: null,
  isUpdaing: false,
};

export const examReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXAM_REQUEST:
      return { ...state, isLoading: true };
    case ADD_EXAM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
        successMessage: action.payload.message,
      };
    case ADD_EXAM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };

    case GET_EXAM_REQUEST:
      return { ...state, isLoading: true };

    case GET_EXAM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
        selectedExam: action.payload.exam,
      };

    case GET_EXAM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };

    case CLEAR_MESSAGES:
      return {
        ...state,
        isError: false,
        errorMessage: null,
        successMessage: null,
      };

    case UPDATE_EXAM_DATA_REQUEST:
      return {
        ...state,
        isUpdaing: true,
      };

    case UPDATE_EXAM_DATA_SUCCESS:
      return {
        ...state,
        isUpdaing: false,
        isError: false,
        errorMessage: null,
        successMessage: action.payload.message,
      };

    case UPDATE_EXAM_DATA_FAILURE:
      return {
        ...state,
        isUpdaing: false,
        isError: true,
        errorMessage: action.payload.message,
      };

    default:
      return state;
  }
};
