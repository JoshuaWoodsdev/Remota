import React from "react";
import Layout from "../components/layout";

//setup main component
const HomePage = () => {
  return (
    <div>
      <Layout>

      <main class="cf pa3 pa4-m pa5-l mw9 center ">
  <div class="fr w-100 w-80-l">
    <p class="f6">
      Who we are
    </p>
    <h1 class="f2 f1-l lh-title mt0 mb4 mb5-ns">
      Simple striaght to the point job search
    </h1>
  </div>
  <div class="f6 lh-copy fl w-100 mb4">
    <div class="fl-ns w-100 w-20-l pr3-m pr5-l">
      <p>
        Jahrbuch <small class="fw6">1968/69</small>
      </p> 
    </div>
    <div class="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
        Institut suisse pour l'étude de l'art
      </p> 
    </div>
    <div class="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
      
      </p> 
    </div>
    <div class="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
        Istituto svizzero di studi d'arte
      </p>
    </div>
    <div class="fl-ns w-50-m w-20-l pr3-m pr5-l">
      <p>
        Swiss Institute for Art Research
      </p>
    </div>
  </div>
  <img src="http://mrmrs.github.io/photos/u/007.jpg" class="db" alt="iceland"/>
</main>

      </Layout>
    </div>
  );
};



export default HomePage;