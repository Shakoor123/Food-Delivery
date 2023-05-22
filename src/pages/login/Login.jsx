import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginTop">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="loginCenter">
            <h1 className="loginTitle">Login</h1>
            <span className="loginText">
              Sign in with your data that you entered during your registration.
            </span>
            <form onSubmit={handleSubmit} className="loginForm">
              <div className="formItem">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="formItem">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="keepLogin">
                <input type="checkbox" name="" id="" />
                <span className="keepLoginText">Keep me logged in</span>
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
              <div>
                <button type="forgot">Forgot password</button>
              </div>
            </form>
          </div>
          <div className="loginBottom">
            <span className="switchText">Don’t have an account? Sign up</span>
          </div>
        </div>
        <div className="loginRight"></div>
      </div>
    </div>
  );
}
