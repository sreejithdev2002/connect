import React from "react";
import "../Styles/global.css";
import { useNavigate } from "react-router-dom";

function JobsCard({ jobs }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/job");
  };
  return (
    <div className="jobsCard">
      <h2 onClick={handleClick} id="jobName">{jobs.name}</h2>
      <h3>{jobs.company}</h3>
      <p>{jobs.experience}</p>
      <p>{jobs.location}</p>
      <p>{jobs.skills}</p>
      <p id="jobDescription">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod possimus
        dolores natus consectetur autem beatae deserunt ab itaque nobis, libero
        suscipit, praesentium dolor minima aperiam illo nemo magnam impedit
        asperiores?
      </p>
      <div>
        <button id="applyBtn" style={{ backgroundColor: "red" }}>
          Apply
        </button>
        <button id="saveBtn" style={{ backgroundColor: "green" }}>
          Save
        </button>
      </div>
    </div>
  );
}

export default JobsCard;
