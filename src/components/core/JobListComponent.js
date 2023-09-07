import React from "react";
import JobCardComponent from "./JobCardComponent";

//Im passing down a promt for the jobcard
const JobListComponent = ({ jobs }) => {
    return (
        <div>
           {jobs.map((job) => (
                <JobCardComponent  key={job.id} job={job} />
                ))}
        </div>
    );
};


export default JobListComponent;