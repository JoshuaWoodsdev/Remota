import React from "react";

const JobCardComponent = ({ job }) => {
 return(
       <div>
      <div> {/* Replaced Card with div */}
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
      </div> {/* Replaced Card with div */}
</div>
 );
};

export default JobCardComponent;
