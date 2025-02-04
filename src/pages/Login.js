import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dummy authentication (Replace this with actual authentication logic)
    if (email === "test@example.com" && password === "password") {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid email or as password!");
    }
  };

  return (
    <div className="login-container">
      <div className="split-container">
        <div className="left-section">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
            alt="login form"
            className="project-image"
          />
        </div>

        <div className="right-section">
          <div className="login-form">
            <div className="logo">
              <img src={logo} alt="logo" className="front-logo" />
            </div>

            <h5 className="login-title">Log in your account</h5>

            <input
              className="input-field"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login-button" onClick={handleLogin}>
              Login
            </button>

            <div className="links">
              <a href="#">Forgot password?</a>
              <p className="account">
                Don't have an account?{" "}
                <button className="Sign-up">
                  <a onClick={() => navigate("/signup")}>Sign-up</a>
                </button>
              </p>
              <p>
                <a href="#">Terms of use</a> | <a href="#">Privacy policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
