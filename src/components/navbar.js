import React from 'react';
import backgroundImage from '../images/austin-distel-wawEfYdpkag-unsplash.jpg';
import SearchComponent from './jobs/SearchComponent';

const Navbar = () => {

  const navStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover', // Adjust this to control how the image covers the navbar
    backgroundPosition: 'center', // Adjust this to control the image's position
    height: '700px', // Default height for small to medium screens
  
  };
  return (
    <nav style={navStyle} class="pa3 pa4-ns">
      <div class="tc flex flex-wrap">
        <a class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns white" href="#" title="Home">Remota</a>
      </div>
      <SearchComponent/>
    </nav>
  );
};

export default Navbar;