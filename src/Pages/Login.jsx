import React from "react";
import "../Styles/global.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleRegister = () => navigate("/register");
  return (
    <>
      <Header />
      <div className="login">
        <h1>Login</h1>
        <form>
          <div className="loginInputDiv">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your registered email..."
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
          <button type="submit">Login</button>
        </form>
        <p onClick={handleRegister}>Create a new Account</p>
      </div>
    </>
  );
}

export default Login;
