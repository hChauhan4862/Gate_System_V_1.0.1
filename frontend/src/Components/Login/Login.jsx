import React from 'react'
import './login.css'


const Login = () => {
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
            <input type="text"  placeholder="Enter your Email ID" />

            
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />

            <button>Submit</button>

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