import React from 'react';
import './AboutMe.css';
import aboutMeImg from '../assets/about-me.png'; // Change to your actual about me image path

const AboutMe = () => {
  return (
    <section className="aboutme-section bg-dark text-light py-5">
      <div className="aboutme-container">
        {/* Text Section */}
        <div className="aboutme-text">
          <h1 className="display-6 fw-bold">About Me</h1>
          <p className="lead">
            I am a passionate Data Engineer and Analyst focused on transforming raw data into meaningful insights. 
            Skilled in Python, SQL, and big data technologies like PySpark, I build scalable, efficient data pipelines 
            and analytics solutions. I love turning complex data challenges into actionable knowledge that drives 
            business success.
          </p>
          <p className="lead">
            With experience in tools such as Docker, Airflow, and Databricks, I ensure smooth orchestration and deployment 
            of data workflows. My approach balances technical excellence with a collaborative mindset to create impactful, 
            data-driven results.
          </p>
        </div>

        {/* Image Section */}
        <div className="aboutme-image-wrapper">
          <img 
            src={aboutMeImg} 
            alt="About Me" 
            className="aboutme-image" 
            style={{ width: '65%', aspectRatio: '1 / 1', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
