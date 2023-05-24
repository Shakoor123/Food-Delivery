import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import loginBg from "../../assets/loginBg.png";
import eye from "../../assets/eye.png";
import { useNavigate } from "react-router-dom";
import Slide from "../../components/slide/Slide";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };
  return (
    <div className="login">
      <div className="loginLeft">
        <div className="loginTop">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="loginCenter">
          <h1 className="loginTitle">Login</h1>
          <span className="loginText" id="loginTextId">
            Sign in with your data that you entered during your<br></br>{" "}
            registration.
          </span>
          <form onSubmit={handleSubmit} className="loginForm">
            <div className="formItem">
              <label htmlFor="email">Email</label>
              <div className="loginInputWrapper">
                <input
                  className="logininput"
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="formItem">
              <label htmlFor="password">Password</label>
              <div className="loginInputWrapper">
                <input
                  className="logininput"
                  type={showPass ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <img
                  src={eye}
                  alt=""
                  className="loginEye"
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                />
              </div>
            </div>
            <div className="keepLogin">
              <input type="checkbox" name="" id="" className="loginCheckbox" />
              <span className="keepLoginText">Keep me logged in</span>
            </div>
            <div>
              <button type="submit" className="loginButton">
                Login
              </button>
            </div>
            <div className="forgotWrapper">
              <span className="forgot">Forgot password</span>
            </div>
          </form>
        </div>
        <div className="loginBottom">
          <span className="switchText">
            Don’t have an account? <span className="switchLink">Sign up</span>
          </span>
        </div>
      </div>
      <div className="loginRight">
        <div className="loginRightWrapper">
          <img src={loginBg} alt="" className="loginbg" />
        </div>
        {/* <div className="loginSlide">
          <h2 className="loginSlideTitle">Leave reviews for all meals</h2>
          <div className="loginSlideText">
            Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo
            probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
          </div>
          <div className="loginSlideDots">
            <div className="loginSlideDot"></div>
            <div className="loginSlideDot dotActive"></div>
            <div className="loginSlideDot"></div>
            <div className="loginSlideDot"></div>
          </div>
        </div> */}
        <Slide />
      </div>
    </div>
  );
}
