import React from 'react';
import './Hero.css'; // Includes glow and 3D styles
import profileImg from '../assets/profile.webp';
import profileBackImg from '../assets/profile-back.png';

const Hero = () => {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <div className="row align-items-start flex-column flex-md-row">
          {/* Text Section - 60% on md+ screens, full width below image on smaller */}
          <div className="col-md-7">
            <h1 className="display-6 fw-bold text-glow">
              Hello Brains, Bytes, Bonds and Bots
            </h1>
            <h3 className="mb-3 text-muted">Data Engineer & Analyst</h3>
            <p className="lead">
              Passionate about transforming raw data into meaningful insights. Skilled in Python, SQL, and currently mastering PySpark. Let’s build data-driven solutions together.
            </p>
            <button className="btn btn-outline-info mt-3">View Projects</button>
          </div>
          {/* Image Section - 40% on md+ screens, full width on smaller */}
          <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
            <div className="flip-card" style={{ width: '70%', maxWidth: '300px' }}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={profileImg}
                    alt="Sharvan at computer"
                    className="img-fluid rounded-4 hero-image"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="flip-card-back">
                  <img
                    src={profileBackImg}
                    alt="Sharvan back"
                    className="img-fluid rounded-4 hero-image"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
