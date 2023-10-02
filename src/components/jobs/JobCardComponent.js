import React from "react";
import {  useHistory } from "react-router-dom"; // Import useHistory

const JobCardComponent = ({ job }) => {
  const history = useHistory(); // Use 'useHistory'

  const handleMoreInfoClick = () => {
    // Navigate to the job detail page using the job's ID
    history.push(`/jobs/${job.id}`);
  };

  return (
    <div className="pa3 bg-white ma2" style={{ width: "300px", height: "auto", boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)" }}>
      <div className="bg-white h-100" id="jobcard">
        <h2 className="f3">{job.title}</h2>
        <p className="f5">{job.company}</p>
        <p className="f6">{job.location}</p>
        <p className="f6">{job.salary}</p>
        <p className="f6">{job.remote}</p>
        <p className="f6">{job.skills}</p>
        <p className="f6">{job.description}</p>
        <p className="f6">{job.type}</p>
      </div>
      <button onClick={handleMoreInfoClick}>More about the job</button>
    </div>
  );
};

export default JobCardComponent;

