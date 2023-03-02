import React,{useState, useEffect,useRef} from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import '../../Components/Timer/Timer2';
import jwt from 'jwt-decode';
import axios from "axios";

import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host

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
  const token = localStorage.getItem("token");
  const sidebar = localStorage.getItem("sidebar");
  const [user_id, setUser_id] = useState(jwt(token).user_id);
  const [userData, setUserData] = useState([]);
  const[city, setCity] = useState ("")   //(localStorage.getItem("city"))
  const [weatherData, setWeatherData] = useState([])
  const [waetherDate , setWeatherDate] = useState([])
  const [country, setCountry] = useState([])
  const [tempraute, settempraute] = useState([])
  const [feelLike, setFeelLike] = useState([])
  const [description, setDescription] = useState([])
  const [minTemp, setMinTemp] = useState([])
  const [maxTemp, setMaxTemp] = useState([])
  const [icon, setIcon] = useState([])
  const [weatherMain, setWeatherMain] = useState([])

// check token
  if(!token){
    window.location.href = "/login"
  }

// check token time
function checkToken(token) {
if (token) {
  const decodedToken = jwt(token);
  const currentTime = Date.now() / 1000;
  if (decodedToken.exp < currentTime) {
    // Token has expired, user is not authenticated
    window.location.href = "/login"
  }
  // Token is valid, user is authenticated
  return true;
} else {
  // Token is invalid, user is not authenticated
  window.location.href = "/login"
}
}

// get userbyid
function getUserById(user_id) {
  const config = {
    headers: { Authorization: `Bearer ${token}`,
    "Content-Type": "application/json" },
  };
  console.log(user_id)
axios.get(endpoint + "user/getUserById/" + user_id, config)
.then((res) => {
  console.log(res.data.user_settings[0].city)
  setUserData(res.data)
  // setlocalstorage
  setCity(res.data.user_settings[0].city)
  //localStorage.setItem("city", res.data.user_settings[0].city)
})
.catch((err) => {
  console.log(err)
})
}



  useEffect(() => {
    checkToken(token)
    getUserById(user_id)
  }, []);


// weather API Key
const API_KEY = "3e2d332a74ccf9786d820679a31cc8ce"
//get weather data
function getWeatherData(city){
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
  .then((res) => {
    console.log(res.data)
    setWeatherData(res.data)
    setCountry(res.data.sys.country)
    settempraute(res.data.main.temp)
    setFeelLike(res.data.main.feels_like)
    setDescription(res.data.weather[0].description)
    setMinTemp(res.data.main.temp_min)
    setMaxTemp(res.data.main.temp_max)
    setIcon(res.data.weather[0].icon)
    setWeatherMain(res.data.weather[0].main)

  })
  .catch((err) => {
    console.log(err)
  })
}
useEffect(() => {
  console.log(city,"city")
  getWeatherData(city)
}, [city])

// date time convert from timestamp
function CalculateWeatherData(){
  var d = new Date(weatherData.dt);
  var a = new Date(d*1000);
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var dayOfWeek = days[a.getDay()]
  var date = a.getDate();
  var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  month = month[a.getMonth()];
  // year only last 2 digits
  var year = a.getFullYear().toString().substr(-2);
  var hour = a.getHours();
  var min = a.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var sec = a.getSeconds();
  setWeatherDate ([hour +":"+ min +" - "+ dayOfWeek+" "+ date +" "+ month +"' "+ year])
  
}
// icon condition
function IconSetup(){
  if(icon === "01d"){
    return <i class="wi wi-day-sunny"></i>
  }else if(icon === "01n"){
    return <i class="wi wi-night-clear"></i>
  }else if(icon === "02d"){
    return <i class="wi wi-day-cloudy"></i>
  }else if(icon === "02n"){
    return <i class=" wi wi-night-alt-cloudy"></i>
  }else if(icon === "03d"){
    return <i class="wi wi-day-cloudy-gusts"></i>
  }else if(icon === "03n"){
    return <i class="wi wi-night-alt-cloudy-gusts"></i>
  }else if(icon === "04d"){
    return <i class="wi wi-day-cloudy-windy"></i>
  }else if(icon === "04n"){
    return <i class=" wi wi-night-alt-cloudy-windy"></i>
  }else if(icon === "09d"){
    return <i class="wi wi-day-showers"></i>
  }else if(icon === "09n"){
    return <i class=" wi wi-night-alt-showers"></i>
  }else if(icon === "10d"){
    return <i class=" wi wi-day-rain-mix"></i>
  }else if(icon === "10n"){
    return <i class="wi wi-night-alt-rain-mix"></i>
  }else if(icon === "11d"){
    return <i class="wi wi-day-lightning"></i>
  }else if(icon === "11n"){
    return <i class="wi wi-night-lightning"></i>
  }else if(icon === "13d"){
    return <i class="wi wi-day-snow"></i>
  }else if(icon === "13n"){
    return <i class=" wi wi-night-snow"></i>
  }else if(icon === "50d"){
    return <i class="wi wi-windy"></i>
  }else if(icon === "50n"){
    return <i class="wi wi-windy"></i>
  }

}

useEffect(() => {
  setTimeout(() => {
  CalculateWeatherData()
  }, 50);
}, [weatherData])


// set interval for weather data
useEffect(() => {
  const interval = setInterval(() => {
    getWeatherData(city)
  }, 1000 * 60 * 60 * 2);
  return () => clearInterval(interval);
}, [city])

// set interval for weather data
useEffect(() => {
  const interval = setInterval(() => {
    CalculateWeatherData()
  }, 1000 * 60 * 60 * 2);
  return () => clearInterval(interval);
}, [weatherData])



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
      <div className="body-main">

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
                          <img src="./assets/images/doors.svg" alt="" />
                        </div>
                        <h5>Doors</h5>
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
                          <img src="./assets/images/dvi.svg" alt="" />
                        </div>
                        <h5>Devices</h5>
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
                          <img src="./assets/images/rfid-sensor.svg" alt="" />
                        </div>
                        <h5>Online</h5>
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
                          <img src="./assets/images/visitor.svg" alt="" />
                        </div>
                        <h5>Students</h5>
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
                    <div className="up-down">Min {(minTemp- 273.15).toFixed(2)}º • Max {(maxTemp- 273.15).toFixed(2)}º</div>
                    <div className="short-icon">
                      <div style={{fontSize: '3.5em',}}>
                      {IconSetup()}
                      </div>
                    
                    {/* <img src="./assets/images/icon-top-cloud.png" alt="" /> */}
                      <p>{weatherMain}</p>
                    </div>
                    </div>
                    <div className="weather-info">
                      <h2>{description}</h2>
                      <h1>{(tempraute- 273.15).toFixed(2)}ºC <span>Feels like {(feelLike -273.15).toFixed(2)}ºC</span></h1>
                      <h3>{weatherData.name}, {country}</h3>
                      <h6>{(!waetherDate)?"03:09 - Tuesday, 25 Nov' 22":waetherDate}</h6>
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
  );
};

export default Home;
