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
  try {
    let res = await axios.get("http://localhost:8000/teams");
    dispatch({type: GET_TEAM_SUCCESS,payload:res.data});
    // console.log(res.data)
    return res.data
  } catch (error) {
    dispatch({type:GET_TEAM_ERROR})
  }
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
