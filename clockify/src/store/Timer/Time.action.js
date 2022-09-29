import { TIME_SUCCESS_GET, TIME_SUCCESS_POST } from "./Time.type"
import axios from "axios"

export const postTimeTracker= (creds) => async (dispacth) => {
    
 try {
    let response= await  axios.post("http://localhost:8080/timetracker", creds)
    dispacth ({
        type:TIME_SUCCESS_POST,
        payload:response.data
    })
 } catch (e) {
    console.log(e, "action")
 }
}


export const getTimeTracker = () =>  (dispatch) => {

    axios
      .get("http://localhost:8080/timetracker")
      .then((d) => {
        console.log(d.data,"dhshf")
        dispatch({ type: TIME_SUCCESS_GET, payload: d.data });
      })
      .catch((e) => {
       console.log("error",e)
      });
  };


  export const deleteTimeTracker=()=>async (dispacth)=>{

  }