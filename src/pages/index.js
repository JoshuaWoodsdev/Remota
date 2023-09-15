import React from "react";
import Layout from "../components/layout";
import SigninSignup from "../components/signinSignup";

//setup main component
const HomePage = () => {
  return (
    <div>
      <Layout>
        <main class="cf pa3 pa4-m pa5-l mw9 center f4 f2-ns ">
          <div class="f3 f2-m f-subheadline-l measure lh-title fw1 mt0"> We keep it simple.
            No frills, no fuss—just the jobs you're looking for, right at your fingertips.
            Start your journey with us today and discover your next career adventure.</div>

            <SigninSignup/>
        </main>
      </Layout>
    </div>
  );
};



export default HomePage;