import {
  TIME_SUCCESS_DELETE,
  TIME_SUCCESS_GET,
  TIME_SUCCESS_POST,
} from "./Time.type";
import axios from "axios";

export const postTimeTracker = (creds) => async (dispacth) => {
  try {
    let response = await axios.post("http://localhost:8000/timetracker", creds);
    console.log(response.data,"post")
    dispacth ({
        type:TIME_SUCCESS_POST,payload:response.data
    })
  } catch (e) {
    console.log(e, "action");
  }
};

export const getTimeTracker = () => (dispatch) => {
  axios
    .get("http://localhost:8000/timetracker")
    .then((d) => {
      console.log(d.data, "dhshf");
      dispatch({ type: TIME_SUCCESS_GET, payload: d.data });
    })
    .catch((e) => {
      console.log("error", e);
    });
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
