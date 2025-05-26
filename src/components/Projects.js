import React from 'react';
import './Project.css';
import project1 from '../assets/profile-back.jpg';
import project2 from '../assets/profile-back.jpg';
import project3 from '../assets/profile-back.jpg';
import project4 from '../assets/profile-back.jpg';
import project5 from '../assets/profile-back.jpg';
import project6 from '../assets/profile-back.jpg';

const projectList = [
  {
    title: 'Sales Dashboard(Working)',
    image: project1,
    link: 'https://github.com/yourusername/sales-dashboard',
  },
  {
    title: 'ETL Data Pipeline(Upcoming)',
    image: project2,
    link: 'https://github.com/yourusername/data-pipeline',
  },
  {
    title: 'Churn Prediction(Upcoming)',
    image: project3,
    link: 'https://github.com/yourusername/churn-model',
  },
  {
    title: 'Streaming Analytics(Upcoming)',
    image: project4,
    link: 'https://github.com/yourusername/streaming-analytics',
  },
  {
    title: 'ML Model API(Upcoming)',
    image: project5,
    link: 'https://github.com/yourusername/model-api',
  },
  {
    title: 'Data Lake Design(Upcoming)',
    image: project6,
    link: 'https://github.com/yourusername/data-lake',
  },
];

const Projects = () => {
  return (
    <section id = "projects" className="bg-dark text-light py-5">
      <div className="container">
        <h1 className="mb-4">My Projects</h1>

        <div className="row">
          {projectList.map((project, index) => (
            <div className="col-md-4 mb-4 d-flex" key={index}>
              <div className="project-card rounded-4 p-3 w-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid rounded-3 mb-3 project-image"
                />
                <h5 className="project-title text-white mb-2">{project.title}</h5>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info w-100 mt-auto text-white"
                >
                  See Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info w-100 mt-auto text-white">
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
