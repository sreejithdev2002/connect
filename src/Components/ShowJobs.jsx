import React from 'react'
import JobsCard from './JobsCard'

function ShowJobs() {
  return (
    <div className='showJobs'>
      <div className='showJobsGrid'>
        <JobsCard/>
        <JobsCard/>
        <JobsCard/>
      </div>
    </div>
  )
}

export default ShowJobs
