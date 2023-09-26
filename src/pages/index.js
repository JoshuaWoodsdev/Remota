import React from "react";


//setup main component
const HomePage = () => {
  return (
    <div>
         <Layout>
        <main className=" cf ws-normal  pa4-m pa5-l mw9 center f4 f2-ns mt4 bg-lightest-blue navy"> {/* Added margin-top */}
          <SigninSignup />
        </main>
      </Layout>
    </div>
  );
};



export default HomePage;