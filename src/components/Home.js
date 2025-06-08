import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h1>Coach Abhinay</h1>

      <Link className="btn" to="/info">
        <div className="btn-content">
          <img src="btn1.jpg" alt="About" />
          <div className="btn-text">
            <strong>About Me</strong>
          </div>
        </div>
      </Link>

      <Link className="btn" to="/programs">
        <div className="btn-content">
          <img src="btn2.jpg" alt="Programs" />
          <div className="btn-text">
            <strong>Programs</strong>
          </div>
        </div>
      </Link>

      <Link className="btn" to="/form">
        <div className="btn-content">
          <img src="btn3.jpg" alt="Work" />
          <div className="btn-text">
            <strong>Let's work together!</strong><br />
            Book an appointment!
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
