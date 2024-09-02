import React, { useState } from "react";
import "../Styles/global.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <h2>CONNECT</h2>
      {!isLoggedIn ? (
        <div>
          <button style={{ backgroundColor: "green" }}>Login</button>
          <button style={{ backgroundColor: "red" }}>Signup</button>
        </div>
      ) : (
        <>
          <div>
            <ul>
              <li>Your Application</li>
              <li>Profile</li>
            </ul>
          </div>
          <button style={{ backgroundColor: "red" }}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Header;
