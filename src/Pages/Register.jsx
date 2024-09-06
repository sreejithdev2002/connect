import React, { useState } from "react";
import "../Styles/global.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.length >= 8 && password === confirmPassword) {
      const formData = {
        username,
        email,
        password,
      };
      console.log(formData); 
    }
  };

  return (
    <>
      <Header />
      <div className="login">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div className="loginInputDiv">
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="loginInputDiv">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
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
          <div className="loginInputDiv">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Enter your password again..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
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
