import React, { useState } from "react";
import "../Styles/global.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleRegister = () => navigate("/register");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="loginInputDiv">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your registered email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="loginInputDiv">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
