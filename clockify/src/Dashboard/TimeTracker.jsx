import React, { useEffect, useRef, useState } from 'react'
import { useCountdownTimer } from 'use-countdown-timer';


const TimeTracker = () => {

    const [count, setCount] = useState(0);
    const timeref = useRef(null);

    useEffect(() => {
      return stopTime;
    }, []);
  
    const startTime = () => {
      if (timeref.current !== null) return;
      timeref.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    };
    const stopTime = () => {
        clearInterval(timeref.current);
        timeref.current = null;
      };
    
  return (
    <div>
      <form action="">
        <input type="text" placeholder='What are you working on' />
        <select name="Project" id="">
            <option value="React"></option>
            <option value="Redux"></option>
            <option value="Thunk"></option>
        </select>
        <button>tag</button>
        <p>Timer</p>
        <button type='submit'>Start</button>
      </form>
    </div>
  )
}

export default TimeTracker
