import React, { useState , useEffect } from "react";

import "./Pomodoro.css";

const Pomodoro = () => {
  const [workValue, SetWorkValue] = useState(25);
  const [breakValue, setBreakValue] = useState(5);
  const [sec, setSec] = useState(0);
  const [time , setTime] = useState(false);
  const workTime = (e) => {
    if (e.target.value < 0) {
      e.target.value = "";
    } else {
      SetWorkValue(e.target.value);
    }
  };

  const breakTime = (e) => {
    if (e.target.value < 0) {
      e.target.value = "";
    } else {
      setBreakValue(e.target.value);
    }
  };

  const setValue = () => {
    if (workValue == 0 && breakValue == 0) {
      SetWorkValue(25);
      setBreakValue(5);
    }
  };
  let timer;
  const start = () => {
    setTime(true);
  };

  useEffect(()=>{
    if(time == true){
      timer = setTimeout(() => {
        if (sec < 1) {
          setSec(59);
          console.log(workValue - 1);
          SetWorkValue(workValue - 1);
          
        } else {
          setSec(sec - 1);
        }
      }, 1000);
    }
    
  })
    
  
   
  const stop = () => {};
  const reset = () => {};

  return (
    <>
      <div className="header">
        <h1>
          {(workValue > 10 ? workValue : 0+workValue)}:{sec}
        </h1>
        <span>Work-Time</span>
      </div>
      <div className="buttons">
        <button onClick={start}>start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="input">
        <input
          type="number"
          placeholder="work duration"
          value={workValue}
          onChange={workTime}
        />
        <input
          type="number"
          placeholder="break duration"
          value={breakValue}
          onChange={breakTime}
        />
        <button id="set" onClick={setValue}>
          set
        </button>
      </div>
    </>
  );
};

export default Pomodoro;
