import React, { useState } from "react";
import "./LoginSignup.css";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Login() {
  const action = "Login";
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const body = {
        userName: username,
        password: password,
      };
      // Make the API request to the delete endpoint using Axios
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        body
      );
      // Check if the request was successful
      if (response.status === 200) {
        console.log("Login successfully!");
        localStorage.setItem("token", response.data.token);

        const responseuser = await axios.get(
          "http://localhost:8000/api/v1/users/user",
          {
            headers: {
              Authorization: `Bearer ${response.data.token}`,
              "Content-Type": "application/json", // Adjust content type as needed
            },
          }
        );
        if (responseuser.status === 200) {
          localStorage.setItem("userType", responseuser.data.user.role);
          navigate("/");
          window.location.reload();
        }
      } else {
        console.error("Error deleting item:", response.statusText);
        alert(response.errorMessage);
      }
    } catch (error) {
      alert(error.response.data.errorMessage);
    }
  };
  return (
    <div className="loginsignup-container">
      <div className="header">
        <div className="text">
          <h2>{action}</h2>
        </div>
        <div className="signinlink">
          <span className="span_new">New? </span>
          <a href="/Signup">Create an account</a>
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="input">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">Forgot your password?</div>
      )}
      <div className="submit-container">
        <div
          className={username && password ? "submit" : "submit  gray"}
          onClick={handleLogin}
        >
          Sign in
        </div>
      </div>
    </div>
  );
}

export default Login;
