import React,{useEffect, useState} from 'react'
import './login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(endpoint + "login/login", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        // navigate("/");
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
  
    <div className="login-wrapper">
        <div className="login-container">
            <div className="login-header">
                <div className="login-logo">
                <img src="./assets/images/logo.png" alt="login-logo" />
                </div>
            </div>

            <div className="login-body">
            <h5>Hi, Welcome Back!</h5>
            <h6>Please sign in to continue</h6>

            <form action="" class="login-form">
            <label>Email</label>
            <input type="text"  placeholder="Enter your Email ID" 
            onChange={
             (e)=>{ console.log(e.target.value)
              setEmail(e.target.value)}
              }/>

            
            <label>Password</label>
            <input type="password" placeholder="Enter Password" 
            onChange={
              (e)=>{ console.log(e.target.value)
              setPassword(e.target.value)}
            }
            />

            <button
            onClick={handleLogin}
            >Submit</button>

            </form>

            <div className="login-seperation">
              <p>or sign in with</p>
              <div className="login-border"></div>
            </div>

            <div className="social-media">
              <div className="media-link"><a href="#"><img src="./assets/images/google.png" alt="google-logo" /></a></div>
              <div className="media-link"><a href="#"><img src="./assets/images/facebook.png" alt="facebook-logo" /></a></div>
              <div className="media-link"><a href="#"><img src="./assets/images/linkedin.png" alt="linkedin-logo" /></a></div>
            </div>

            </div>
            
        </div>
     </div>
    
  )
}

export default Login