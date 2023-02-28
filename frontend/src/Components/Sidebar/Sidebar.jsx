import React, { useEffect } from "react";
import "./Sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [logoImage, setLogoImage] = useState();

  localStorage.setItem("logoA", "./assets/images/logo.png");
  localStorage.setItem("logoB", "./assets/images/logo-dark.png");

  const logoA = localStorage.getItem("logoA");
  const logoB = localStorage.getItem("logoB");

  useEffect(() => {
    if (window.innerWidth < 768) {
      setLogoImage(logoA);
    } else {
      setLogoImage(logoB);
    }
  }, [logoA, logoB]);

  // console.log(logoImage)

  const hendleMouseOver = (e) => {
    // get sidebar value from header component
    const sidebar = document
      .getElementById("sidebar-menu")
      .classList.contains("toggled");
    const menuText = document.getElementById("item-list");
    //get the span element inside the menuText
    const span = menuText.getElementsByTagName("span");
    const logo = document.getElementById("logo-img-side");
    //loop through the span element and show it
    for (let i = 0; i < span.length; i++) {
      if (sidebar) {
        span[i].style.display = "block";
      }
    }
    if (sidebar) {
      //change the logo image
      setLogoImage(logoB);
      //increase the height and width of the logo
      logo.style.height = "60px";
      logo.style.width = "160px";
    }
  };

  const handleMouseOut = (e) => {
    const sidebar = document
      .getElementById("sidebar-menu")
      .classList.contains("toggled");
    const menuText = document.getElementById("item-list");
    //get the span element inside the menuText
    const span = menuText.getElementsByTagName("span");
    const logo = document.getElementById("logo-img-side");

    //loop through the span element and hide it
    for (let i = 0; i < span.length; i++) {
      // console.log(sidebar)
      if (sidebar) {
        span[i].style.display = "none";
      }
    }

    if (sidebar) {
      //change the logo image
      setLogoImage(logoA);
      //increase the height and width of the logo
      logo.style.width = "40px";
      logo.style.height = "40px";
    }
  };

  return (
    <div
      className={
        // screan size is less than 768px
        window.innerWidth < 768 ? "sidebar toggled" : "sidebar"
      }
      id="sidebar-menu"
      onMouseOver={hendleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="logo">
        <Link to="/">
          <img id="logo-img-side"
            src={logoImage}
            alt="logo"
            style={
              // screan size is less than 768px
              window.innerWidth < 768 ? { width: "40px" } : { width: "160px" }
            }
          />
          <span id="logo-text"></span>
        </Link>
      </div>

      <div className="navbar-list" id="item-list">
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              <i className="icon-speedometer"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Dashboard
              </span>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/orgs" activeclassname="active">
              <i className="icon-globe"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Organization
              </span>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/groups" activeclassname="active">
              <i className="icon-people"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Groups
              </span>{" "}
            </NavLink>
          </li>
          {/* <li><NavLink to='/departments' activeclassname="active"><i className="icon-directions"></i> <span style={ window.innerWidth < 768 ?{display:"none"}:{display:"block"}}>Departments</span> </NavLink></li> */}
          <li>
            <NavLink to="/user" activeclassname="active">
              <i className="icon-user-female"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Users
              </span>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/roles" activeclassname="active">
              <i className="ti-id-badge"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Roles
              </span>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/permissions" activeclassname="active">
              <i className="ti-thumb-up"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Permissions
              </span>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/doors" activeclassname="active">
              <i className="ti-layout-sidebar-left"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Doors
              </span>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/devices" activeclassname="active">
              <i className="ti-mobile"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Devices
              </span>{" "}
            </NavLink>
          </li>
         
          <li>
            <NavLink to="/deviceGroup" activeclassname="active">
              <i className="ti-layers-alt"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Devices Group
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Students" activeclassname="active">
              <i className="ti-user"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Students
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              activeclassname="active"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <i className="far fa-list-alt"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Reports
              </span>
            </NavLink>
            <div class="collapse" id="collapseExample">
              <ul>
                <li>
                  <NavLink to="/reports" activeclassname="active">
                    <i className="icon-calender"></i>{" "}
                    <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                      Date Wise
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/reportPunchWise" activeclassname="active">
                    <i className="icon-like"></i>{" "}
                    <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                      Punch Wise
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NavLink to="/settings" activeclassname="active">
              <i className="ti-settings"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Settings - hold
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" activeclassname="active">
              <i className="icon-logout"></i>{" "}
              <span style={window.innerWidth < 768? { display: "none" } : { display: "block" } }>
                Logout - hold
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
