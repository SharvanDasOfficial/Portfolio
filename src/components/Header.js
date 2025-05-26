import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 fixed-top bg-dark shadow">
      <a className="navbar-brand fw-bold fs-3" href="#home">
        Sharvan Raj Das <span role="img" aria-label="engineer at computer">👨‍💻</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu"
        aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          {[
            { label: 'Home', id: 'home' },
            { label: 'About Me', id: 'aboutme' },
            { label: 'Projects', id: 'projects' },
            { label: 'Skills', id: 'skills' },
            { label: 'Certifications', id: 'certifications' },
            { label: 'Contact', id: 'contact' }
          ].map((item) => (
            <li className="nav-item mx-2" key={item.id}>
              <a className="nav-link" href={`#${item.id}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
