import React from "react";
import Layout from "../components/layout";
import SigninSignup from "../components/signinSignup";
import { Router } from "react-router-dom";

//setup main component
const HomePage = () => {
  return (
  <div>
    <Router>
         <Layout>
        <main className=" cf ws-normal  pa4-m pa5-l mw9 center f4 f2-ns mt4 bg-lightest-blue navy"> {/* Added margin-top */}
          <SigninSignup/>
        </main>
         </Layout>
         </Router>
   </div>
  )
};

export default HomePage;