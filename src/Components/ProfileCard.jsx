import React from "react";
import "../Styles/global.css";
import profileImage from "../Assets/Images/profileImage.jpg";

function ProfileCard() {
  return (
    <div className="profile">
      <main className="profileCard">
        <img src={profileImage} alt="" className="image" />
        <div className="profileUsername">
          <h1>Sreejith U</h1>
          <h3>MERN Stack Developer</h3>
          <h4>Softroniics</h4>
          <div className="proUserSocial">
            <ul>
              <li>LinkedIn</li>
              <li>Github</li>
              <li>Leetcode</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </main>
      <main className="profileCard">
        <h1>Experience</h1>
      </main>
      <main className="profileCard">
        <h1>Skills</h1>
      </main>
      <main className="profileCard">
        <h1>Education</h1>
      </main>
      <main className="profileCard">
        <h1>Projects</h1>
      </main>
      <main className="profileCard">
        <h1>Certifications</h1>
      </main>
    </div>
  );
}

export default ProfileCard;
