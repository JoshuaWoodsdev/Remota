// src/pages/404.js
import React from "react";

const NotFoundPage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 100px)",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
  };

  const headingStyle = {
    fontSize: "36px",
    color: "#333",
  };

  const paragraphStyle = {
    fontSize: "18px",
    color: "#664",
  };

  return (
    <div style={containerStyle}>

      <h1 style={headingStyle}>404 - Page Not Found</h1>
      <p style={paragraphStyle}>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
