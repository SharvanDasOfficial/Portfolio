import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <h5 className="mb-3">Let's Connect</h5>
        <div className="social-icons d-flex justify-content-center mb-3">
          <a href="https://github.com/SharvanDasOfficial" className="icon-link" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sharvan-das-4a675a319/" className="icon-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:SharvanDasOfficial@gmail.com" className="icon-link">
            <FaEnvelope size={24} />
          </a>
          {/* <a href="https://twitter.com/yourusername" className="icon-link" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a> */}
        </div>
        <div className="footer-text">
          &copy; {new Date().getFullYear()} <strong>Sharvan</strong> — Built with <span role="img" aria-label="heart">❤️</span> and <strong>React</strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
