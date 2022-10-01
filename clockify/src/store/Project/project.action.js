import axios from "axios";
import {
  GET_PROJECT_ERROR,
  GET_PROJECT_LOADING,
  GET_PROJECT_SUCCESS,
  PROJECT_POST_ERROR,
  PROJECT_POST_LOADING,
  PROJECT_POST_SUCCESS,
} from "./project.types";

export const getProjectapi = () => async (dispatch) => {
  dispatch({ type: GET_PROJECT_LOADING });
  await axios
    .get("http://localhost:8000/projects")
    .then((d) => {
      dispatch({
        type: GET_PROJECT_SUCCESS,
        payload: d.data,
      });
    })
    .catch((e) => {
      dispatch({ type: GET_PROJECT_ERROR });
    });
};

export const projectPostApi = (data) => async (dispatch) => {
  dispatch({ type: PROJECT_POST_LOADING });
  try {
    let response = await axios.post("http://localhost:8000/projects/add", data);
    dispatch({
      type: PROJECT_POST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: PROJECT_POST_ERROR,
    });
  }
};
