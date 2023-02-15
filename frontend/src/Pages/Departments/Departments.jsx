import React from 'react'


import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host

const Departments = () => {
  const sidebar = localStorage.getItem("sidebar");
  return (
    
    <main id="main-body" className={sidebar === "true" ? window.innerWidth < 768 ?  "main-body-toggle":"": "main-body-toggle" } >
    <h1>Departments</h1>
  </main>
  )
}

export default Departments