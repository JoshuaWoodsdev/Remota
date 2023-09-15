import React from "react";

const JobCardComponent = ({ job }) => {
  return (
    <div className="pa3 bg-white  ma2" style={{ width: "300px", height: "auto", boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)" }}>
      <div className=" bg-white h-100" id="jobcard">
        <h2 className="f3">{job.title}</h2>
        <p className="f5">{job.company}</p>
        <p className="f6">{job.location}</p>
        <p className="f6">{job.salary}</p>
        <p className="f6">{job.remote}</p>
        <p className="f6">{job.skills}</p>
        <p className="f6">{job.description}</p>
        <p className="f6">{job.type}</p>
      </div>
    </div>
  );
};

export default JobCardComponent;
