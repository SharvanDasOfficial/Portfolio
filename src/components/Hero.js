import React from 'react';
import './Hero.css'; // Includes glow and 3D styles
import profileImg from '../assets/profile.webp'; // Replace with your image

const Hero = () => {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section - 60% */}
          <div className="col-md-7 mb-4 mb-md-0">
            <h1 className="display-6 fw-bold text-glow">Hello Brain, Bytes, Bonds and Bots</h1>
            <h3 className="mb-3 text-muted">Data Engineer & Analyst</h3>
            <p className="lead">
              Passionate about transforming raw data into meaningful insights. Skilled in Python, SQL, and currently mastering PySpark. Let’s build data-driven solutions together.
            </p>
            <button className="btn btn-outline-info mt-3">
              View Projects
            </button>
          </div>

          {/* Image Section - 40% with 3D hover effect */}
          <div className="col-md-5 text-center">
            <div className="hero-3d-wrapper">
              <img
                src={profileImg}
                alt="Sharvan working at computer"
                className="img-fluid rounded-4 hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
