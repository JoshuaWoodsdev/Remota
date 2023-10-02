import React from "react";
import { useParams } from "react-router-dom"; // If you're using React Router

const JobDetailPage = ({ jobs }) => {
  const { jobId } = useParams(); // Retrieve jobId from URL parameter

  // Find the specific job by its ID
  const job = jobs.find((job) => job.id === jobId);

  return (
    <div>
      {job ? (
        <div>
          <h1>{job.title}</h1>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
          <p>Remote: {job.remote ? "Yes" : "No"}</p>
          <p>Skills: {job.skills.join(", ")}</p>
          <p>Description: {job.description}</p>
          <p>Type: {job.type}</p>
        </div>
      ) : (
        <p>Job not found</p>
      )}
    </div>
  );
};

export default JobDetailPage;
