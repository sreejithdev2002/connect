import React, { useState } from "react";

function SearchJobs() {
  const [checked, setChecked] = useState({
    fresher: false,
    experienced: false,
  });

  const handleCheckBox = (e) => {
    setChecked({
      fresher: e.target.value === "fresher",
      experienced: e.target.value === "experienced",
    });
  };

  return (
    <div className="searchJobs">
      <form>
        <div className="inputDiv">
          <label>Enter your job role</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="eg. Software Engineer, Web Developer..."
          />
        </div>
        <div className="inputDiv">
          <label>Enter your preferred location</label>
          <input type="text" name="" id="" placeholder="eg. Kochi, Chennai..." />
        </div>
        <div className="inputDivCheckBox">
          <input
            type="checkbox"
            name="experience"
            id="fresher"
            value="fresher"
            checked={checked.fresher}
            onChange={handleCheckBox}
          />
          <label>Fresher</label>
          <input
            type="checkbox"
            name="experience"
            id="experienced"
            value="experienced"
            checked={checked.experienced}
            onChange={handleCheckBox}
          />
          <label>Experienced</label>
        </div>
        <button type="submit">Search Jobs</button>
      </form>
    </div>
  );
}

export default SearchJobs;
