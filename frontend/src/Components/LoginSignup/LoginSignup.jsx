import React, { useState } from "react";
import "./LoginSignup.css";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa6";

function Login() {
  const [action, setAction] = useState("Login");

  return (
    <div className="screen">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? null : (
            <div className="input">
              <FaUser className="icon" />
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="input">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? null : (
          <div className="forgot-password">Forgot your password?</div>
        )}
        <div className="submit-container">
          <div
            className={action === "Sign Up" ? "submit" : "submit  gray"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Login" ? "submit" : "submit  gray"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
