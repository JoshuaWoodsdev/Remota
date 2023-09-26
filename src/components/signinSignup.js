import React from "react";
import { navigate } from "gatsby"

const SigninSignup = () => {
  return (
    <article className="mw7 center ma5 ph3 ph5-ns tc br2 pv5 bg-lightest-blue navy mb5">
      <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
        Job Search. For you
      </h1>
      <h2 className="fw2 f4 lh-copy mt0 mb3">
        We keep it simple. No frills, no fuss—just the jobs you're looking for, right at your fingertips.
        Start your journey with us today and discover your next career adventure.
      </h2>
      <p className="fw1 f5 mt0 mb3">
        Sign up for beta access or learn more about x.
      </p>
      <div>
      <a className="f6 br-pill bg-blue no-underline white ba b--blue grow pv2 ph3 dib mr3"
          href="#">
          Search Jobs
          
        </a>
        <a className="f6 br-pill blue no-underline ba grow pv2 ph3 dib"
          href="#">
          Post Job
        </a>
      </div>
    </article>
  );
}

export default SigninSignup;

