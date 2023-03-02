import React,{useState, useEffect, useRef} from "react";
import '../../Components/Timer/Timer2';


import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host

const Settings = () => {
  const sidebar = localStorage.getItem("sidebar");


  
  return (
    <main id="main-body" className={sidebar === "true" ? window.innerWidth < 768 ?  "main-body-toggle":"": "main-body-toggle" } >
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
        <div className="body-title">
        <div className="b-title-left">
          <h2>User Settings</h2>
          <div id="main"></div>
        </div>
      </div>

{/* Tabs */}

<div className="card">
        <div className="card-title">
          <div className="title-left">
            Edit Account Settings
          </div>
          <div className="title-right">
             
          </div>
        </div>
        <div className="card-body">
          <div className="setting-pannel-container">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Profile Settings</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">General Settings</button>
                
              </div>
            </nav>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                  <div className="row">
                    <div className="col-md-4">
                        <label>Select Option 01</label>
                        <select class="setting-panel" aria-label="Default select example">
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                    </div>
                    
                    <div className="col-md-4">
                        <label>Select Option 02</label>
                          <select class="setting-panel" aria-label="Default select example">
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                    </div>

                    <div className="col-md-4">
                        <label>Select Option 03</label>
                          <select class="setting-panel" aria-label="Default select example">
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                    </div>

                    <div className="col-md-4">
                        <label>Type Name</label>
                        <input class="setting-panel" type="text" placeholder="Type Your Text here"></input>
                    </div>

                    <div className="col-md-4">
                        <label>Select File</label>
                        <input class="setting-panel" type="file" placeholder="Type Your Text here"></input>
                    </div>

                    <div className="col-md-4">
                          <label>Enter Message</label>
                          <textarea class="setting-panel" placeholder="Type Your Message here" rows="3"></textarea>
                    </div>
                  </div>

                  <button href="#" className="btn btn-success"> Apply Changes</button>
                      
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                  <div className="row">
                    <div className="col-md-4">
                        <label>Select Option 04</label>
                        <select class="setting-panel" aria-label="Default select example">
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                    </div>
                    
                    <div className="col-md-4">
                        <label>Select Option 05</label>
                          <select class="setting-panel" aria-label="Default select example">
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                    </div>

                    <div className="col-md-4">
                        <label>Select Option 06</label>
                          <select class="setting-panel" aria-label="Default select example">
                              <option selected>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                    </div>

                    <div className="col-md-4">
                        <label>Type Name</label>
                        <input class="setting-panel" type="text" placeholder="Type Your Text here"></input>
                    </div>

                    <div className="col-md-4">
                        <label>Select File</label>
                        <input class="setting-panel" type="file" placeholder="Type Your Text here"></input>
                    </div>

                    <div className="col-md-4">
                          <label>Enter Message</label>
                          <textarea class="setting-panel" placeholder="Type Your Message here" rows="3"></textarea>
                    </div>
                  </div>
                  <button href="#" className="btn btn-success"> Apply Changes</button>

                </div>
              
              </div>
           </div>
        </div>

 </div>


  </main>
  )
}

export default Settings