import React from "react";
import JobCardComponent from "./JobCardComponent.js"

const JobListComponent = ({ jobs }) => {
  return (
    <div className="pa3">
      <h2 className="f3">Job Listings</h2>
      <div className="flex flex-wrap justify-between">
        {Array.isArray(jobs) ? (
          jobs.map((job) => (
            <JobCardComponent key={job.id} job={job} />
          ))
        ) : (
          <p>No jobs to display</p>
        )}
      </div>
    </div>
  );
};


export default JobListComponent;
