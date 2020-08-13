import React from 'react';
import App from './App';

function Login() {
    return(
        <div className="const">
        <div className="form">
          <h2>Sign In</h2>
          <label>
            <span>Email address</span>
            <input type="email" name="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" />
          </label>
          <button type="submit">Sign in</button>
          <p className="forgot-pass">Forgot Password?</p>
          <div className="social-media">
            <ul>
              <li>
              <img src="./images/facebook.png" alt="facebook" /></li>
              <li><img src="./images/instagram.png" alt="insta" /></li>
              <li><img src="./images/twitter.png" alt="twitter" /></li>
              <li><img src="./images/linkedin.png" alt="linkedIn" /></li>
            </ul>
          </div>
          <label>
            <span style={{fontSize: '10px'}}>By Pari ©</span>
          </label>
        </div>
        <div className="sub-cont">
          <div className="img">
          </div>
        </div>
      </div>
    );
}

export default Login;