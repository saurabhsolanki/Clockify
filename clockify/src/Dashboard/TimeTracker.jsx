import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Select } from "@chakra-ui/react";
import style from "./TimeTracker.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  deleteTimeTracker,
  getTimeTracker,
  postTimeTracker,
} from "../store/Timer/Time.action";

const TimeTracker = () => {
  let { TimeData } = useSelector((store) => store.time);
  const { isopen } = useSelector((store) => store.checkOpen);
  console.log(TimeData, "thelel");

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
    select: select,
    StartTime: startTime,
    endTime: `${hours}:${minutes}`,
    timer: formatTime(),
  };
  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
    setIsActive(true);
    setEndTime(showData.endTime);
    dispatch(postTimeTracker(showData));
    setTimer(null);
  };

  const deleteTime = (id) => {
    dispatch(deleteTimeTracker(id));
    // dispatch(getTimeTracker())
  };
  useEffect(() => {
    dispatch(getTimeTracker());
  }, []);

  const [isActiveColor, setIsActiveClolor] = useState(false);

  const tagChange = () => {
    setIsActiveClolor((current) => !current);
  };

  return (
    <div
      id={style.maintimeTrackerComopnent}
      style={isopen ? { width: "85%" } : { width: "98%" }}
    >
      <div id={style.MainDivForTimeTracking}>
        <div>
          <Input
            width="150%"
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
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="React">Project</option>
            <option value="Redux">Redux</option>
            <option value="Thunk">Thunk</option>
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
          {
            <Button
              className={!isPaused ? style.startclr : style.stopclr}
              onClick={isPaused ? handlePause : handleStart}
            >
              {!isPaused ? "START" : "STOP"}
            </Button>
          }
        </div>
      </div>

      <div id={style.data_show_container}>
        {TimeData?.map((e) => (
          <div
            className={style.projectlist}
            style={{ display: "flex", gap: "20px" }}
            key={e.id}
          >
            <p>{e.text}</p>
            <p>{e.select}</p>
            <p>{e.StartTime}</p>
            <p>{e.endTime}</p>
            <Button
              style={{
                backgroundColor: isActiveColor ? "tomato" : "",
                color: isActiveColor ? "white" : "",
                padding: "10px 40px",
              }}
              onClick={tagChange}
            >
              $
            </Button>
            <p>{e.timer}</p>
            <Button onClick={() => deleteTime(e.id)}>
              <RiDeleteBinLine />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTracker;
