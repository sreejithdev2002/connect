import React from "react";
import '../Styles/global.css'
import JobsCard from "./JobsCard";

function ShowJobs() {
  const jobsData = [
    {
      id: 1,
      name: "React.js Developer",
      company: "Softroniics",
      location: "Calicut",
      experience: "Fresher",
      skills: "HTML, CSS, Javascript, React.js",
    },
    {
      id: 2,
      name: "Node.js Developer",
      company: "Softroniics",
      location: "Perinthalmanna",
      experience: "Experienced",
      skills: "Node.js, Express.js, MongoDB",
    },
    {
      id: 3,
      name: "MERN Stack Developer",
      company: "Softroniics",
      location: "Palakkad",
      experience: "Fresher",
      skills: "React.js, Node.js, Express.js, MongoDB",
    },
  ];

  return (
    <div className="showJobs">
      <h1>Job Lists</h1>
      <div className="showJobsGrid">
        {jobsData.length !== 0 &&
          jobsData.map((jobs) => <JobsCard key={jobs.id} jobs={jobs} />)}
      </div>
      {jobsData.length === 0 && <h1>No Jobs Available</h1>}
    </div>
  );
}

export default ShowJobs;
