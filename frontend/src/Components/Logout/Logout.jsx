import React from 'react'
import { Navigate, redirect } from 'react-router-dom';

const Logout = () => {
  // const handelClick = () => {
  //   window.location.href = "/login";
  // }

  // navigate to login page
// clear lo
  localStorage.clear();


  return window.location.href = "/login";


  // const sidebar = localStorage.getItem("sidebar");
  // return (
  //   <main id="main-body" className={sidebar === "true" ? window.innerWidth < 768 ?  "main-body-toggle":"": "main-body-toggle" } >
  //   <h1>Logout</h1>
  //   <button onClick={handelClick}>Logout</button>

  // </main>
  // )
}

export default Logout