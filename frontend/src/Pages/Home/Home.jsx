import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import Header from '../../Components/Header/Header'
import Sidebar from "../../Components/Sidebar/Sidebar";

const pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
];

const Home = () => {
  return (
    <>
          <Header />
      <Sidebar />
    <main id="main-body" className={window.innerWidth < 768 ? "main-body-toggle" : ""}>
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

      <div className="body-title">
        <div className="b-title-left">
          <h2>Dashboard</h2>

        </div>

        <div className="b-title-right">
          <ul className="short-bread">
            <li>Home</li>
            <li><span>Dashboard</span></li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="wn-card-cnt">
                    <div className="wn-data-icon">
                        <div className="wn-icon color-01">
                          <img src="./assets/images/bs-gate.svg" alt="" />
                        </div>
                        <h5>Connected Devices</h5>
                        <h6><span className="positive">64%</span>last month</h6>
                    </div>
                    <div className="wn-data-figure">
                        <div className="wn-count">10,257</div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div className="col-md-3">
          <div className="card">
              <div className="card-body">
              <div className="wn-card-cnt">
                    <div className="wn-data-icon">
                        <div className="wn-icon color-02">
                          <img src="./assets/images/p-gate.svg" alt="" />
                        </div>
                        <h5>Doors</h5>
                        <h6><span className="negative">64%</span>last month</h6>
                    </div>
                    <div className="wn-data-figure">
                        <div className="wn-count">17,977</div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div className="col-md-3">
          <div className="card">
              <div className="card-body">
              <div className="wn-card-cnt">
                    <div className="wn-data-icon">
                        <div className="wn-icon color-03">
                          <img src="./assets/images/rfid.svg" alt="" />
                        </div>
                        <h5>Comments</h5>
                        <h6><span className="positive">64%</span>last month</h6>
                    </div>
                    <div className="wn-data-figure">
                        <div className="wn-count">159</div>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="col-md-3">
          <div className="card">
              <div className="card-body">
              <div className="wn-card-cnt">
                    <div className="wn-data-icon">
                        <div className="wn-icon color-04">
                          <img src="./assets/images/display.svg" alt="" />
                        </div>
                        <h5>Online</h5>
                        <h6><span className="positive">64%</span>last month</h6>
                    </div>
                    <div className="wn-data-figure">
                        <div className="wn-count">14,257</div>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="col-md-4">
          <div className="card">
              <div className="card-title">
              <div className="title-left">
                  <h4>Title Goes Here</h4>
                </div>
                <div className="title-right">
                  
                </div>
              </div>
              <div className="card-body">
              <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={pdata}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
             
              </div>
            </div>
        </div>

        <div className="col-md-4">
          <div className="card">



              <div className="card-title">
              <div className="title-left">
                  <h4>Title Goes Here</h4>
                </div>
                <div className="title-right">
                  
                </div>
              </div>
              <div className="card-body">
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={pdata}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="student" fill="#395335" />
                  <Bar dataKey="fees" fill="#6773ff" />
                </BarChart>
              </ResponsiveContainer>
              </div>
            </div>
        </div>

        <div className="col-md-4">
        <div className="weather-widget weather-01">
                    <div className="upper-header">
                    <div className="up-down">Day 23º • Night 17º</div>
                    <div className="short-icon">
                    <img src="./assets/images/icon-top-cloud.png" alt="" />
                      <p>Cloudy</p>
                    </div>
                    </div>
                    <div className="weather-info">
                      <h2>Partly Cloudy</h2>
                      <h1>13.6ºC <span>Feels like 25ºC</span></h1>
                      <h3>New York, USA</h3>
                      <h6>03:09 - Tuesday, 25 Nov' 22</h6>
                    </div>
                </div>
        </div>

        <div className="col-md-12">
          <div className="card">
              <div className="card-title">
              <div className="title-left">
                  <h4>Live Logs</h4>
                </div>
                <div className="title-right">
                  
                </div>
              </div>
              <div className="card-body">
                <div className="command-log">
                <p>src\Components\Header\Header.jsx</p>
                <p>Line 78:23:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-
              plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  <span>jsx-a11y/anchor-is-valid</span></p>
               <p> Line 94:17:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint
              -plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  <span>jsx-a11y/anchor-is-valid</span></p>
              <p> Line 152:21:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint
              -plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  <span>jsx-a11y/anchor-is-valid</span></p>
              <p> Line 153:21:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint
              -plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md <span>jsx-a11y/anchor-is-valid</span></p>
                </div>
              </div>
            </div>
        </div>

      </div>
      
      
        
     </div>
      
    </main>
    </>
  );
};

export default Home;
