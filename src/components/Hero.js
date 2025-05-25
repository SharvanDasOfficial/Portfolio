import React from 'react';
import './Hero.css'; // Includes glow and 3D styles
import profileImg from '../assets/profile.webp';
import profileBackImg from '../assets/profile-back.png';
import { FaPython, FaDatabase, FaGitAlt, FaChartBar  } from 'react-icons/fa';
import { SiApachespark, SiDatabricks, SiApacheairflow, SiDocker } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <div className="row align-items-start flex-column flex-md-row">
          {/* Text Section */}
          <div className="col-md-7">
            <h1 className="display-6 fw-bold text-glow">
            Hello Brains, Bytes, Bonds & Bots!
            </h1>
            <h3 className="mb-4 role-tagline">
            <span className="typing-effect">I'm Data Alchemist</span>  
            </h3>
            <p className="lead">
              <strong>Transforming noise into Knowledge.</strong>
              <br />
              Through Scalable Pipelines and  Analytical percision.
            </p>
            <h3 className="mb-4 role-tagline">
            <span className="typing-effect">Expertise: </span>
            </h3>

            {/* Skill Icons */}
            <div className="skills-container d-flex flex-wrap mt-4">
              <div className="skill-icon text-center m-3">
                <FaDatabase size={36} color="#00BFFF" />
                <div className="mt-2">SQL</div>
              </div>
              <div className="skill-icon text-center m-3">
                <FaPython size={36} color="#FFD43B" />
                <div className="mt-2">Python</div>
              </div>
              <div className="skill-icon text-center m-3">
                <FaChartBar size={36} color="#F2C811" />
                <div className="mt-2">Power BI</div>
              </div>

              <div className="skill-icon text-center m-3">
                <SiDocker size={36} color="#0db7ed" />
                <div className="mt-2">Docker</div>
              </div>
              <div className="skill-icon text-center m-3">
                <SiApachespark size={36} color="#E25A1C" />
                <div className="mt-2">PySpark</div>
              </div>
              <div className="skill-icon text-center m-3">
                <FaGitAlt size={36} color="#F1502F" />
                <div className="mt-2">Git</div>
              </div>
              <div className="skill-icon text-center m-3">
                <SiApacheairflow size={36} color="#017CEE" />
                <div className="mt-2">Airflow</div>
              </div>
              <div className="skill-icon text-center m-3">
                <SiDatabricks size={36} color="#FF3621" />
                <div className="mt-2">Databricks</div>
              </div>
            </div>

            <button className="btn btn-outline-info mt-4">View Projects</button>
          </div>

          {/* Image Section */}
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
