import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Select, Text } from '@chakra-ui/react'
import  style from"./TimeTracker.module.css"
import { useDispatch, useSelector } from "react-redux";
import {RiDeleteBinLine} from "react-icons/ri"
import { deleteTimeTracker, getTimeTracker, postTimeTracker } from "../store/Timer/Time.action";

const TimeTracker = () => {
  let {TimeData}=useSelector(store=> store.time)
  const {isopen}=useSelector((store)=>store.checkOpen)
  console.log(TimeData,"thelel")

  let dispatch = useDispatch();
  let arr = new Date();
  let [hours, minutes] = [arr.getHours(), arr.getMinutes()];
  const [text, setText] = useState("");
  const [select, setSelect] = useState();
  const [projectname,setProjectName]=useState()
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();


  // let arr = new Date().toTimeString().split(" ");
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    // start button logic here
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setStartTime(`${hours}:${minutes}`);
  };


  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  let showData = {
    text: text,
    select:projectname,
    StartTime: startTime,
    endTime: `${hours}:${minutes}`,
    timer: formatTime(),
  };
  const handlePause = () => {
    // Pause button logic here
    clearInterval(countRef.current);
    setIsPaused(false);
    setIsActive(true);
    setEndTime(showData.endTime)
    dispatch(postTimeTracker(showData))
    setTimer(null)
    // dispatch(getTimeTracker())
  };

  
  const deleteTime=(id)=>{
    dispatch(deleteTimeTracker(id))
    // dispatch(getTimeTracker())
  }
  useEffect(()=>{
    dispatch(getTimeTracker())
    // deleteTime()
  },[])

  const [isActiveColor, setIsActiveClolor] = useState(false);

  const tagChange = () => {
    // 👇️ toggle
    setIsActiveClolor(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

<<<<<<< HEAD
=======
  // getting project
  const x={
    name:"xyz"
  }
  const getProject=()=>{
    axios.get("http://localhost:8000/projects").then((res)=>{
      console.log(res.data,"poject")
      setSelect(res.data)
    })
  }
console.log(select,"oyerut")
>>>>>>> 93206117ad822871a2a996fec4965a190978ec50
  return (
    <div   id={style.maintimeTrackerComopnent} style={isopen?{width: "85%"}:{width: "98%"}}>
      <div id={style.MainDivForTimeTracking} >
        <div>
          <Input width="150%"
          id={style.TimeTrackerInput}
            type="text"
            placeholder="What are you working on"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <Select
            name="Project"
            id=""
            placeholder="Projects"
            onChange={(e) =>setProjectName(e.target.value)}
          >
<<<<<<< HEAD
            <option value="React">Project</option>
            <option value="Redux">Redux</option>
            <option value="Thunk">Thunk</option>
=======
            {
              select?.map((e)=>(
                <option value={e.name}>{e.name}</option>
              ))
            }
>>>>>>> 93206117ad822871a2a996fec4965a190978ec50
          </Select>
        </div>
        <div>
          {" "}
          <Button>$</Button>
        </div>
        <div>
          <p>{formatTime()}</p>
        </div>
        <div>
          { <Button className={!isPaused ? style.startclr : style.stopclr} onClick={isPaused ?handlePause : handleStart}>{!isPaused ? "START" : "STOP"}</Button>}
        </div>
      </div>

      <div id={style.data_show_container}>
        {TimeData?.map((e) => (
          <div className={style.projectlist} style={{ display: "flex", gap: "20px" }} key={e.id}>
            <p>{e.text}</p>
            <p>{e.select}</p>
            <p>{e.StartTime}</p>
            <p>{e.endTime}</p>
            <Button  style={{
          backgroundColor: isActiveColor ? 'tomato' : '',
          color: isActiveColor ? 'white' : '', padding:"10px 40px"
        }}
        onClick={tagChange}>$</Button>
            <p>{e.timer}</p>
            <Button onClick={()=>deleteTime(e.id)}><RiDeleteBinLine/></Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTracker;
