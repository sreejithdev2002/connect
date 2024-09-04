import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "../Styles/global.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();
  return (
    <div className="header">
      <h2 onClick={() => navigate("/")}>CONNECT</h2>
      {!isLoggedIn ? (
        <div>
          <button style={{ backgroundColor: "green" }}>Login</button>
          <button style={{ backgroundColor: "red" }}>Signup</button>
        </div>
      ) : (
        <>
          <div>
            <ul>
              <li id="headerLinks" onClick={()=> navigate("/yourApplications")}>Your Applications</li>
              <span>|</span>
              <li id="headerLinks" onClick={()=> navigate("/profile")}>Profile</li>
            </ul>
          </div>
          <button style={{ backgroundColor: "red" }}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Header;
