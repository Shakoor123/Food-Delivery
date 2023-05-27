import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import loginBg from "../../assets/loginBg.png";
import eye from "../../assets/eye.png";
import { useNavigate } from "react-router-dom";
import Slide from "../../components/slide/Slide";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userRedux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSignUp) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/register`,
          { name, email, password }
        );
        console.log("Register successfully");
        console.log(res.data);
        setIsSignUp(false);
      } catch (err) {
        console.log("registration faild");
        console.log(err);
      }
    } else {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/login`,
          { email, password }
        );
        console.log("Login successfully");
        dispatch(loginUser(res.data));
        navigate("/home");
      } catch (err) {
        console.log("login faild");
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginLeft">
        <div className="loginTop">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="loginCenter">
          <h1 className="loginTitle">{isSignUp ? "Sign Up" : "Login"}</h1>
          {!isSignUp && (
            <span className="loginText" id="loginTextId">
              Sign in with your data that you entered during your<br></br>{" "}
              registration.
            </span>
          )}

          <form onSubmit={handleSubmit} className="loginForm">
            {isSignUp && (
              <div className="formItem">
                <label htmlFor="name">Name</label>
                <div className="loginInputWrapper">
                  <input
                    className="logininput"
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
              </div>
            )}

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
            {!isSignUp && (
              <div className="keepLogin">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="loginCheckbox"
                />
                <span className="keepLoginText">Keep me logged in</span>
              </div>
            )}

            <div>
              <button type="submit" className="loginButton">
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </div>
            {!isSignUp && (
              <div className="forgotWrapper">
                <span className="forgot">Forgot password</span>
              </div>
            )}
          </form>
        </div>
        <div className="loginBottom">
          <span className="switchText">
            {isSignUp
              ? "Already have an account ? "
              : "Don’t have an account ? "}
            <span
              className="switchLink"
              onClick={() => {
                setIsSignUp(!isSignUp);
              }}
            >
              {!isSignUp ? "Sign Up" : "Login"}
            </span>
          </span>
        </div>
      </div>
      <div className="loginRight">
        <div className="loginRightWrapper">
          <img src={loginBg} alt="" className="loginbg" />
        </div>
        <Slide />
      </div>
    </div>
  );
}
