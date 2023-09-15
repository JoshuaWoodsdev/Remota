import React from 'react';
import backgroundImage from '/assets/austin-distel-wawEfYdpkag-unsplash.jpg';

const Navbar = () => {
  const navStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover', // Adjust this to control how the image covers the navbar
    backgroundPosition: 'center', // Adjust this to control the image's position
    // Add more CSS properties as needed
  }




  return (
    <nav style={navStyle} class="pa3 pa4-ns">
      <div class="tc flex flex-wrap">
        <a class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns white" href="#" title="Home">Remota</a>
      </div>
      <div class="tc pb3 pa3">
        <a class="link dim gray f4 f3-ns dib mr3" href="#" title="Home">Home</a>
        <a class="link dim gray f4 f3-ns dib mr3" href="#" title="About">About</a>
        <a class="link dim gray f4 f3-ns dib mr3" href="#" title="Store">Store</a>
        <a class="link dim gray f4 f3-ns dib" href="#" title="Contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;