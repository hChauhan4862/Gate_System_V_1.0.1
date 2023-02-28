import React,{useState, useEffect} from "react";
import TimerWithDate  from '../../Components/Timer/Timer';

import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host

const Settings = () => {
  const sidebar = localStorage.getItem("sidebar");
  const [time, setTime] = useState(TimerWithDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(TimerWithDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main id="main-body" className={sidebar === "true" ? window.innerWidth < 768 ?  "main-body-toggle":"": "main-body-toggle" } >
       {/* mobile time */}
       <div className="timer" id="mobile-timer">
          <div className="time-icon">
            <img src="./assets/images/clock.png" alt="clock-icon" />
          </div>
          <div className="main-time">
            {" "}
            {time.hours}:{time.minutes} <span>{time.ampm}</span>
          </div>
          <div className="main-date">
            <h5>{time.day}</h5>
            <h6>
              {time.date} {time.month} {time.year}
            </h6>
          </div>
        </div>
      {/* mobile time */}
    <h1>Settings</h1>
  </main>
  )
}

export default Settings