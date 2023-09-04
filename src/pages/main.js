import React from 'react';
import Layout from '/components/layout.js';
import SearchComponent from '../components/core/SearchComponent';


const HomePage = () => {

  const handleSearch = (query) => {
    // Here, you can define what happens when a search is performed.
    console.log(`Searching for ${query}`);
  };

  return (
    <Layout>
      <h1>This is the main page</h1>
      <p>search the list of jobs here</p>
      <SearchComponent onSearch={handleSearch} /> 
           {/* Other components like FeaturedJobs can go here */}
    </Layout>
  );
};

export default HomePage;
