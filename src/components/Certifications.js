import React from 'react';
import {FaGoogle } from 'react-icons/fa';

const certifications = [
  {
    name: 'Data Engineer (Learning Path)',
    issuer: 'Google Cloud',
    icon: <FaGoogle />,
    link: 'https://www.credential.net/...',
  },
];

const Certifications = () => {
    return(
    <section id = "certifications"className="bg-dark text-light py-5">
  <div className="container">
    <h2 className="mb-5">📜 Certifications</h2>
    <div className="row">
      {certifications.map((cert, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100 bg-secondary text-light border-0 shadow rounded-4 p-3 certification-card">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3 fs-2 text-info">{cert.icon}</div>
              <div>
                <h5 className="mb-1">{cert.name}</h5>
                <p className="mb-0 small text-muted">{cert.issuer}</p>
              </div>
            </div>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mt-auto">
              View Certificate
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    )
}
export default Certifications;