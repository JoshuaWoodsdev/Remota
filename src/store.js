import { createStore } from 'pullstate';

//create the store
const JobStore = createStore({
    //jobListings and Resumes
    jobListings: [],
    userResumes: [],
    //other extra state varibles will go here as needed
});


export default JobStore;