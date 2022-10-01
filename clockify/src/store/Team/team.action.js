import axios from "axios";
import {
  GET_TEAM_ERROR,
  GET_TEAM_LOADING,
  GET_TEAM_SUCCESS,
  TEAM_POST_ERROR,
  TEAM_POST_LOADING,
  TEAM_POST_SUCCESS,
} from "./team.types";

export const getTeamApi = () => async (dispatch) => {
  dispatch({ type: GET_TEAM_LOADING });
  await axios
    .get("http://localhost:8000/teams")
    .then((d) => {
  
      dispatch({
        type: GET_TEAM_SUCCESS,
        payload: d.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: GET_TEAM_ERROR });
    });
};

export const teamPostApi = (data) => async (dispatch) => {
  dispatch({ type: TEAM_POST_LOADING });
  try {
    let response = await axios.post("http://localhost:8000/teams/add", data);
    dispatch({
      type: TEAM_POST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: TEAM_POST_ERROR,
    });
  }
};
