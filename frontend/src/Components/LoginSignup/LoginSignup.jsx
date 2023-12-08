import React, { useState } from "react";
import "./LoginSignup.css";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa6";

function Login() {
  const [action, setAction] = useState("Sign in");

  return (
    <div className="screen">
      <div className="container">
        <div className="header">
          <div className="text"><h2>{action}</h2></div>
          <div className="signinlink">
                    <span>New ? </span>
                    <a href="/Signup">Create an account</a>
                </div>
        </div>
        <div className="inputs">
          {action === "Sign in" ? null : (
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
          {/* <div
            className={action === "Sign Up" ? "submit" : "submit  gray"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div> */}
          <div
            className={action === "Sign in" ? "submit" : "submit  gray"}
            onClick={() => {
              setAction("Sign in");
            }}
          >
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
