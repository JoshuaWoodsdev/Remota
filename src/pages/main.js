import React from "react";
import Layout from "../components/layout";
import SearchComponent from "../components/core/SearchComponent.js";
import JobListComponent from "../components/core/JobListComponent";

const jobsData = [
  { id: '1', title: 'Software Developer', company: 'Tech Co.', location: 'New York' },
  { id: '2', title: 'Data Scientist', company: 'Data Inc.', location: 'San Francisco' },
  // ...more jobs
];

const MainPage = () => {
  return (
    <Layout>
      <div>
        <h1>Main page will be this page</h1>
        <p>Below this will be the component to display jobs</p>
        <SearchComponent />

        <h1>JobListings</h1>
        <JobListComponent jobs={jobsData} />
      </div>
    </Layout>
  );
};

export default MainPage;