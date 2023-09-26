import React, { useState } from "react";
import Layout from "../components/layout";

import JobsData from '../../JobsData.json'; // Update the import path
// Correct the import path

// Rest of your code...

const JobSearchPage = () => {
  const [filteredJobs, setFilteredJobs] = useState(JobsData);
  //function to handle the search when clicked
  const handleSearch = (query) => {
    // Implement your search logic here based on the query
    const filtered = JobsData.filter((job) => {
      return (
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase()) ||
        job.location.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <Layout>
      <div>
        <p>Below this will be the component to display jobs</p>
        <SearchComponent onSearch={handleSearch} />

        <JobListComponent jobs={filteredJobs} />
      </div>
    </Layout>
  );
};

export default JobSearchPage;