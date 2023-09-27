import React from "react";

const JobTemplate = ({ pageContent}) => {
    const {job} = pageContent;

    return(
        <div>
        <h1>{job.title}</h1>
        <p>Company: {job.company}</p>
        <p>Location: {job.location}</p>
        </div>
    );
};



export default JobTemplate;