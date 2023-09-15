import React from "react";
import JobCardComponent from "./JobCardComponent";

const JobListComponent = ({ jobs }) => {
  return (
    <div className="pa3 ">
      <h2 className="f3">Job Listings</h2>
      <div className="flex flex-wrap justify-between">
        {jobs.map((job) => (
          <JobCardComponent key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListComponent;
