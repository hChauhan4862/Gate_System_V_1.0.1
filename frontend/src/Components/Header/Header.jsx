import React,{ useState,useEffect } from 'react'
import './Header.css'
import TimerWithDate from '../Timer/Timer'
import jwt from 'jwt-decode';
import axios from 'axios';


import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host


const Header = () => {
  const token = localStorage.getItem("token");

  const [sidebar, setSidebar] = useState(true)
  localStorage.setItem("sidebar", sidebar)
  const [time, setTime] = useState(TimerWithDate());
  const [user_id, setUser_id] = useState([]);
  const [user_name, setUser_name] = useState('');
  const [user_email, setUser_email] = useState('');
  const [user_role, setUser_role] = useState('');
  const [user_image, setUser_image] = useState('');
  const [theme, setTheme] = useState([]);

// console.log(user_image)


// check token
  if(!token){
    window.location.href = "/login"
  }
// console.log(token)
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
  let user_id = decodedToken.user_id
  setUser_id(user_id)
  getUserData(user_id)
  return true;
} else {
  // Token is invalid, user is not authenticated
  window.location.href = "/login"
}
}
// checkToken(token)
useEffect(() => {
  checkToken(token)
}, [])


// Dark Theme Function
function darkTheme() {
  //add class in body
  document.body.classList.toggle("dark-theme");
      //remove class in body
  document.body.classList.remove("light-theme");
  // get the class
  const theme_toggler = document.querySelector(".theme-toggler");
// get the all i tag inside the theme_toggler
  const i = theme_toggler.getElementsByTagName("i");
  // add the class to the i tag for first i tag
  i[0].classList.add("active");
  // remove the class to the i tag for second i tag
  i[1].classList.remove("active");
}

// Light Theme Function
function LightTheme() {
  //add class in body
  document.body.classList.toggle("light-theme");
  //remove class in body
  document.body.classList.remove("dark-theme");
  // get the class
  const theme_toggler = document.querySelector(".theme-toggler");
// get the all i tag inside the theme_toggler
  const i = theme_toggler.getElementsByTagName("i");
  // add the class to the i tag for first i tag
  i[1].classList.add("active");
  // remove the class to the i tag for second i tag
  i[0].classList.remove("active");

  
} 


// Apply Theme
const applyTheme = (theme) => {
  if (theme === "Dark") {
    darkTheme();
    // console.log("Dark")
    updateTheme("Dark")
  } else {
    LightTheme();
    // console.log("Light")
    updateTheme("Light")
  }
}



// update Theme in DB
function updateTheme(theme) {
  const config = {
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }
  const data = {
    theme: theme,
  }
  axios.put(endpoint + "userSettings/editTheme/" + user_id, data, config)
  .then((res) => {
    console.log(res.data)
    getUserData(user_id)
  })
  .catch((err) => {
    console.log(err)
  })
}

// check the theme from local storage
useEffect(() => {
  console.log(localStorage.getItem("theme"),"theme")
  
  if(localStorage.getItem("theme") === "Dark"){
    document.body.classList.toggle("dark-theme");
      //remove class in body
    document.body.classList.remove("light-theme");
  // get the class
    const theme_toggler = document.querySelector(".theme-toggler");
// get the all i tag inside the theme_toggler
    const i = theme_toggler.getElementsByTagName("i");
  // add the class to the i tag for first i tag
    i[0].classList.add("active");
  // remove the class to the i tag for second i tag
    i[1].classList.remove("active");
  }
  return () => {
    document.body.classList.remove("dark-theme");
    document.body.classList.remove("light-theme");
  }

}, []);





// get the user data from the database
function getUserData (user_id)  {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }
  console.log(user_id, "user_id")
  axios.get(endpoint + "user/getUserById/" + user_id, config)
  .then((res) => {
    console.log(res.data)
    setUser_name(res.data.user_name)
    setUser_email(res.data.user_email)
    setUser_image(res.data.user_img)
    setUser_role(res.data.user_group.group_name)
    setTheme(res.data.user_settings[0].theme)
    // setlocalstorage
    localStorage.setItem("user_role", res.data.user_group.group_name)
    localStorage.setItem("theme", res.data.user_settings[0].theme)
  })
  .catch((err) => {
    console.log(err)
  })
}



  useEffect(() => {
    const interval = setInterval(() => {
      setTime(TimerWithDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
 


  const logoA = localStorage.getItem("logoA");
  const logoB = localStorage.getItem("logoB");

  // console.log(sidebar)


  const menuhandler = () => {
// if click on the menu icon then sidebar will hide and show
    setSidebar(!sidebar)
// set the sidebar value to local storage

  

    if (sidebar) {
    //  use the css class toggled to hide the sidebar
      document.getElementById("sidebar-menu").classList.add("toggled");
      document.getElementById("header").classList.add("header-toggled");
      document.getElementById("logo-text").classList.add("logo-text-toggle");
      document.getElementById("main-body").classList.add("main-body-toggle");
      const menuText = document.getElementById("item-list")
      //get the span element inside the menuText
      const span = menuText.getElementsByTagName("span");
      //loop through the span element and hide it
      for (let i = 0; i < span.length; i++) {
        setTimeout(() => {
        span[i].style.display = "none";
        }, 10);
      }
      const logo = document.getElementsByClassName("logo")
      const img = document.getElementById("logo-img-side");
      // console.log(img)
      img.src = logoA;
      img.style.height = "40px";
      img.style.width = "40px";

      
    }
    else {
      //  use the css class toggled to show the sidebar
      document.getElementById("sidebar-menu").classList.remove("toggled");
      document.getElementById("header").classList.remove("header-toggled");
      document.getElementById("logo-text").classList.remove("logo-text-toggle");
      document.getElementById("main-body").classList.remove("main-body-toggle");
      document.getElementById("item-list").style.display = "block";
      const menuText = document.getElementById("item-list")
      //get the span element inside the menuText
      const span = menuText.getElementsByTagName("span");
      //loop through the span element and show it
      for (let i = 0; i < span.length; i++) {
        setTimeout(() => {
        span[i].style.display = "block";
        }, 200);
      }
      const logo = document.getElementsByClassName("logo")
      const img = document.getElementById("logo-img-side");
      // console.log(img)
      img.src = logoB;
      img.style.height = "60px";
      img.style.width = "160px";
      
    }

  }


      
      

  return (
    <div className={
      // screan size is less than 768px then show the sidebar
      window.innerWidth < 768 ? 'header header-toggled' : "header"
      
    } id="header">
        <div className="first-half">
            <div className="toggle-btn">
              <i className="fa-solid fa-bars menu-icon" onClick={menuhandler}></i>
            </div>
        </div>
        <div className="second-half">
                <div className="timer" id='desktop-timer'>
                  <div className="time-icon">
                    <img src="./assets/images/clock.png" alt="clock-icon" />
                  </div>
                  <div className="main-time">{time.hours}:{time.minutes} <span>{time.ampm}</span></div>
                  <div className="main-date">
                    <h5>{time.day}</h5>
                    <h6>{time.date} {time.month} {time.year}</h6>
                  </div>
                </div>
                <div className="top-header-nav">

                    {/* theme ICON */}
                      <div class="theme-toggler">
                        <i class="material-symbols-outlined" onClick={
                          () => {
                            applyTheme("Dark")
                          }

                        } >dark_mode</i>
                        <i class="material-symbols-outlined active" 
                        onClick={
                          () => {
                            applyTheme("Light")
                          }
                        }>light_mode</i>
                      </div>

                <ul id="menu">
                    <li><a href="#"><img src={!user_image ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" :  "data:image/png;base64," +user_image  }
                  alt="user" class="rounded-circle" width="30" height="30" /></a>
                      <ul>
                      <li><a href="#"><i class="icon-user"></i> Account</a></li>
                      <li><a href="#"><i class="icon-envelope"></i> Inbox</a></li>
                      <li><a href="#"><i class="icon-speedometer"></i> Taskboard</a></li>
                      <li><a href="#"><i class="icon-settings"></i> Settings</a></li>
                      <li><a href="#"><i class="icon-logout"></i> Logout</a></li>
                      </ul>
                    </li>
                    <li><a href="#"><i class="material-symbols-outlined">settings</i></a></li>
                  </ul>
                </div>
                
        </div>

       

       

    </div>
  )
}

export default Header