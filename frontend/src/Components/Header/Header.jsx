import React from 'react'
import './Header.css'
import { useState } from 'react'

const Header = () => {

  const [sidebar, setSidebar] = useState(true)
  localStorage.setItem("sidebar", sidebar)
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")
  const [day, setDay] = useState("Sunday")
  const [date, setDate] = useState("01")
  const [month, setMonth] = useState("January")
  const [year, setYear] = useState("2021")
  const [ampm, setAmpm] = useState("am")


  const logoA = localStorage.getItem("logoA");
  const logoB = localStorage.getItem("logoB");

  // console.log(sidebar)

const Timer = () => {
    const time = new Date();
    const h = time.getHours();
    const mint = time.getMinutes();
    const s = time.getSeconds();
    const d = time.getDay();
    const dt = time.getDate();
    const m = time.getMonth();
    const y = time.getFullYear();
    const exch = h >= 12 ? 'pm' : 'am';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let hours = h > 12 ? h - 12 : h;
    hours = hours < 10 ? '0' + hours : hours;
    const minutes = mint < 10 ? '0' + mint : mint;
    const seconds = s < 10 ? '0' + s : s;
    const day = days[d];
    const date = dt < 10 ? '0' + dt : dt;
    const month = months[m];
    const year = y;
    const ampm = exch;

    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
    setDay(day)
    setDate(date)
    setMonth(month)
    setYear(year)
    setAmpm(ampm)
  }

  setInterval(Timer, 1000)

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
      const img = logo[0].getElementsByTagName("img");
      // console.log(img)
      img[0].src = logoA;
      img[0].style.height = "40px";
      img[0].style.width = "40px";

      
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
      const img = logo[0].getElementsByTagName("img");
      // console.log(img)
      img[0].src = logoB;
      img[0].style.height = "60px";
      img[0].style.width = "160px";
      
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
                  <div className="main-time">{hours}:{minutes} <span>{ampm}</span></div>
                  <div className="main-date">
                    <h5>{day}</h5>
                    <h6>{date} {month} {year}</h6>
                  </div>
                </div>
                <ul className="top-header-list">
                  <li><a href="#"> <i class="material-symbols-outlined">dark_mode</i></a></li>
                  <li><a href="#"> <i class="material-symbols-outlined">account_circle</i></a></li>
                  <li><a href="#"> <i class="material-symbols-outlined">settings</i></a></li>
                </ul>
        </div>

       

       

    </div>
  )
}

export default Header