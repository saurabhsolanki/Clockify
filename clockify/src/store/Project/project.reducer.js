import {
  GET_PROJECT_ERROR,
  GET_PROJECT_LOADING,
  GET_PROJECT_SUCCESS,
  PROJECT_POST_ERROR,
  PROJECT_POST_LOADING,
  PROJECT_POST_SUCCESS,
} from "./project.types";

let initialstate = {
  loading: false,
  error: false,
  token: "",
  data: [],
};

export const teamReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_PROJECT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PROJECT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_PROJECT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case PROJECT_POST_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case PROJECT_POST_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case PROJECT_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        token: "Project added sucessfully",
      };
    }
    default: {
      return state;
    }
  }
};
