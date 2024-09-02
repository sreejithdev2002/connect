import React from 'react'

function JobsCard() {
  return (
    <div className='jobsCard'>
        <h2>React.js Developer</h2>
        <h3>Softroniics</h3>
        <p>Experience: Fresher</p>
        <p>Skills: HTML, CSS, JavaScript (etc)...</p>
        <div>
        <button id='applyBtn' style={{backgroundColor: "red"}}>Apply</button>
        <button id='saveBtn' style={{backgroundColor: "green"}}>Save</button>
        </div>


    </div>
  )
}

export default JobsCard
