import React, { useState}  from "react";
import Layout from "../components/layout";
import SearchComponent from "../components/core/SearchComponent.js";
import JobListComponent from "../components/core/JobListComponent";

const jobsData = [
  { id: '1', title: 'Software Developer', company: 'Tech Co.', location: 'New York' },
  { id: '2', title: 'Data Scientist', company: 'Data Inc.', location: 'San Francisco' },
  // ...more jobs
];

const MainPage = () => {
    const [ filteredJobs,setFilteredJobs] = useState(jobsData);

     //function to handle the search when clicked
     const handleSearch = (query) => {
      // Implement your search logic here based on the query
      const filtered = jobsData.filter((job) => {
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
        <h1>Main page will be this page</h1>
        <p>Below this will be the component to display jobs</p>
        <SearchComponent  onSearch={handleSearch} />

     
        <h1>JobListings</h1>
        <JobListComponent jobs={filteredJobs} />  
            </div>
    </Layout>
  );
};

export default MainPage;