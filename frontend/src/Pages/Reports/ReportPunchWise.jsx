import React,{useEffect,useState} from 'react'
import '../../Components/Timer/Timer2';


const ReportPunchWise = () => {
  const sidebar = localStorage.getItem("sidebar");



  return (
    
    <main
    id="main-body"
    className={
      sidebar === "true"
        ? window.innerWidth < 768
          ? "main-body-toggle"
          : ""
        : "main-body-toggle"
    }
  >
      {/* mobile time */}
      <div className="timer" id="mobile-timer">
          <div className="time-icon">
            <img src="./assets/images/clock.png" alt="clock-icon" />
          </div>
          <div className="main-time" id="hm_ampm">
            {" "}
          </div>
          <div className="main-date">
            <h5 id="day_dom">
              </h5>
            <h6 id="date_dom">
            </h6>
          </div>
        </div>
<div>ReportPunchWise</div>
  </main>
  )
}

export default ReportPunchWise