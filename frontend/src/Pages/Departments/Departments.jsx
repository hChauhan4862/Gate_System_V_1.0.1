import React from 'react'


import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host

const Departments = () => {
  const sidebar = localStorage.getItem("sidebar");
  return (
    
    <main id="main-body" className={sidebar === "true" ? window.innerWidth < 768 ?  "main-body-toggle":"": "main-body-toggle" } >
            <div className="body-main">

          <div className="timer" id='mobile-timer'>
              <div className="time-icon">
                  <img src="./assets/images/clock.png" alt="clock-icon" />
              </div>
                <div className="main-time">05:35 <span>pm</span></div>
                <div className="main-date">
                  <h5>Tuesday</h5>
                  <h6>07 February 2023</h6>
                </div>
          </div>
                <h1>Departments</h1>
          </div>
  </main>
  )
}

export default Departments