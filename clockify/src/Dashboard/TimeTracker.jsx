import React, { useEffect, useRef, useState } from "react";
import { useCountdownTimer } from "use-countdown-timer";
import {useDispatch} from "react-redux"

const TimeTracker = () => {
  const [data, setData] = useState([]);
  let dispatch=useDispatch()

  const [text, setText] = useState("");
  const [select, setSelect] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  let arr = new Date().toTimeString().split(" ");
  let time = arr[0].split(":");
  let [hours, minutes] = time;

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

  const handlePause = () => {
    // Pause button logic here
    clearInterval(countRef.current);
    setIsPaused(false);
    setIsActive(true);
    setEndTime(`${hours}-${minutes}`);
    setData([...data, showData]);
    setIsPaused(true);
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
    endTime: endTime,
    timer: formatTime(),
  };

  return (
    <div id="main_container">
      <div style={{ display: "flex", border: "1px solid black", gap: "10px" }}>
        <div>
          <input
            type="text"
            placeholder="What are you working on"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <select
            name="Project"
            id=""
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="React">Project</option>
            <option value="Redux">Redux</option>
            <option value="Thunk">Thunk</option>
          </select>
        </div>
        <div>
          {" "}
          <button>tag</button>
        </div>
        <div>
          <p>{formatTime()}</p>
        </div>
        <div>
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : (
            <button onClick={handlePause}>
              {isPaused ? "Pause" : "Start"}
            </button>
          )}
        </div>
      </div>

      <div id="data_show_container">
        {data.map((e) => (
          <div style={{display:"flex", gap:"20px"}}>
            <p>{e.text}</p>
            <p>{e.select}</p>
            <p>{e.StartTime}--</p>
            <p>{e.endTime}</p>
            <p>{e.timer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTracker;
