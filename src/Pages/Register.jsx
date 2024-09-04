import React from "react";
import "../Styles/global.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");
  return (
    <>
      <Header />
      <div className="login">
        <h1>Register</h1>
        <form>
        <div className="loginInputDiv">
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
            />
          </div>
          <div className="loginInputDiv">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
            />
          </div>
          <div className="loginInputDiv">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
            />
          </div>
          <div className="loginInputDiv">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Enter your password again..."
            />
          </div>
          <button type="submit">Register Account</button>
        </form>
        <p onClick={handleLogin}>Already have an Account</p>
      </div>
    </>
  );
}

export default Register;
