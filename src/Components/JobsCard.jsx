import React from "react";

function JobsCard({ jobs }) {
  return (
    <div className="jobsCard">
      <h2>{jobs.name}</h2>
      <h3>{jobs.company}</h3>
      <p>{jobs.experience}</p>
      <p>{jobs.location}</p>
      <p>{jobs.skills}</p>
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
