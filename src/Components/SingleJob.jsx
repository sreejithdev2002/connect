import React from "react";
import "../Styles/global.css";

function SingleJob() {
  return (
    <div className="singleJob">
      <div className="sinJobHeader">
        <div id="sinJobDiv">
          <div className="sinJobImg" />
          <h1>React.js Developer</h1>
        </div>
        <div>
          <h3>Softroniics</h3>
          <p>Perinthalmanna</p>
        </div>
      </div>
      <div className="sinJobDetails">
        <h3>
          <span>Experience:</span> 0 - 2 Years
        </h3>
        <h3>
          <span>Salary:</span> 2.5 - 3.5 LPA
        </h3>
        <h3>
          <span>Skills:</span> HTML, CSS, JavaScript, React.js etc...
        </h3>
        <h3>
          <span>Contact:</span> hr@company.com
        </h3>
      </div>
      <div className="sinJobDescription">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsa
          temporibus quisquam veritatis, voluptates autem quae ab, a,
          repellendus facilis vero nostrum nisi animi cum illo. Dolore qui
          reprehenderit vero? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Non ipsa temporibus quisquam veritatis, voluptates
          autem quae ab, a, repellendus facilis vero nostrum nisi animi cum
          illo. Dolore qui reprehenderit vero? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Non ipsa temporibus quisquam veritatis,
          voluptates autem quae ab, a, repellendus facilis vero nostrum nisi
          animi cum illo. Dolore qui reprehenderit vero? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Non ipsa temporibus quisquam
          veritatis, voluptates autem quae ab, a, repellendus facilis vero
          nostrum nisi animi cum illo. Dolore qui reprehenderit vero?
        </p>
      </div>
      <div className="sinJobBtn">
        <button>Apply</button>
      </div>
    </div>
  );
}

export default SingleJob;
