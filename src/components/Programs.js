import React from "react";
import "./Programs.css"; // Link to the external CSS file for styling

const Programs = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="programs-container">
        <div className="program-box">
          <h3>Provides workout plans and customised diet with 24/7 support and progress tracking</h3>
          <p>
            <ol>12 Weeks Program</ol>
            <ol>24 Weeks Program</ol>
            <ol>48 Weeks Program</ol>
          </p>
        </div>

        <div className="program-box">
          <h3>Offline Training Program</h3>
          <ul>Single person</ul>
          <p>
            <ol>12 Session Program</ol>
            <ol>20 Session Program</ol>
          </p>
          <ul>For two people together or more</ul>
          <p>
            <ol>12 Session Program</ol>
            <ol>20 Session Program</ol>
          </p>
        </div>

        <div className="program-box">
          <h3>Contest Preparation</h3>
          <p style={{textAlign:"center" }}>Send email for more details to coachabhinaytraining@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
