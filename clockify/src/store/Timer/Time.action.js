import {
  TIME_SUCCESS_DELETE,
  TIME_SUCCESS_GET,
  TIME_SUCCESS_POST,
} from "./Time.type";
import axios from "axios";

export const postTimeTracker = (creds) => async (dispacth) => {
  try {
    let response = await axios.post("http://localhost:8000/timetracker", creds);
    dispacth({type: TIME_SUCCESS_POST, payload: response.data});
    return response.data;
  } catch (e) {
    console.log(e, "action");
  }
};

export const getTimeTracker = () => async (dispatch) => {
  try {
    let response = await axios.get("http://localhost:8000/timetracker");
    dispatch({ type: TIME_SUCCESS_GET, payload: response.data });
  } catch (error) {
    console.log(error, "err");
  }
};

export const deleteTimeTracker = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`http://localhost:8000/timetracker/${id}`);
    dispatch({ type: TIME_SUCCESS_DELETE, payload: { id: id } });
    return res.data;
  } catch (error) {
    console.log("error of dlelte", error);
  }
};
