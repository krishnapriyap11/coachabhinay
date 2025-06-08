import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";

const Info = () => {
  return (
    <div  className="home-container" style={{
      backgroundImage: "url('/background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    }}>
      <h2>About Our Gym</h2>
      <p>Welcome to my fitness hub! I'm Abhinay, a seasoned fitness trainer with 19 years of experience in helping individuals achieve their health and wellness goals with a passion for empowering others to take control of their fitness journey. I've dedicated my career to providing personlised guidance, support and motivation</p>
      <p>On this website, you'll find a wealth of information on fitness training, nutrition and lifestyle advice. Whether you'r a begineer looking to start your fitness journey or an experienced athlete seeking to optimise your performance, I'm here to help you on every step of the way.</p>
      <p>Explore my site to learn more about my services, philosophy, and success stories. Let's get fit and feel amazing together!</p>
      <Link className="back-button" to="/" style={{width:'200px'}}>Back to Home</Link>
    </div>
  );
};

export default Info;
