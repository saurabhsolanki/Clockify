import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Select, Text } from '@chakra-ui/react'
import "./TimeTracker.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteTimeTracker, getTimeTracker, postTimeTracker } from "../store/Timer/Time.action";

const TimeTracker = () => {
  let {TimeData}=useSelector(store=> store.time)
  console.log(TimeData,"thelel")

  let dispatch = useDispatch();
  let arr = new Date();
  let [hours, minutes] = [arr.getHours(), arr.getMinutes()];
  const [text, setText] = useState("");
  const [select, setSelect] = useState();
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
    setStartTime(`${hours}-${minutes}`);
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
    select: select,
    StartTime: startTime,
    endTime: `${hours}-${minutes}`,
    timer: formatTime(),
  };
  const handlePause = () => {
    // Pause button logic here
    clearInterval(countRef.current);
    setIsPaused(false);
    setIsActive(true);
    setEndTime(showData.endTime)
    dispatch(postTimeTracker(showData))
    // dispatch(getTimeTracker())
  };

  
  const deleteTime=(id)=>{
    dispatch(deleteTimeTracker(id))
    // dispatch(getTimeTracker())
  }
  // useEffect(()=>{
  //   dispatch(getTimeTracker())
  //   deleteTime()
  // },[])

  return (
    <div  style={{"zIndex":"2000"}} id="maintimeTrackerComopnent">
      <div id="MainDivForTimeTracking" style={{ display: "flex", border: "1px solid black", gap: "10px" }}>
        <div>
          <Input
          id="TimeTrackerInput"
            type="text"
            placeholder="What are you working on"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <Select
            name="Project"
            id=""
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="React">Project</option>
            <option value="Redux">Redux</option>
            <option value="Thunk">Thunk</option>
          </Select>
        </div>
        <div>
          {" "}
          <Button>tag</Button>
        </div>
        <div>
          <p>{formatTime()}</p>
        </div>
        <div>
          {!isActive && !isPaused ? (
            <Button onClick={handleStart}>Start</Button>
          ) : (
            <Button onClick={handlePause}>
              {isPaused ? "Pause" : "Start"}
            </Button>
          )}
        </div>
      </div>

      <div id="data_show_container">
        {TimeData?.map((e) => (
          <div style={{ display: "flex", gap: "20px" }} key={e.id}>
            <p>{e.text}</p>
            <p>{e.select}</p>
            <p>{e.StartTime}--</p>
            <p>{e.endTime}</p>
            <p>{e.timer}</p>
            <Button onClick={()=>deleteTime(e.id)}>Del</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTracker;
