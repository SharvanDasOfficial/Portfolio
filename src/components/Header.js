import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4">
      <a className="navbar-brand fw-bold fs-3" href="/">
        Sharvan Raj Das <span role="img" aria-label="engineer at computer">👨‍💻</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu"
        aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          {['Home', 'About Me', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
            <li className="nav-item mx-2" key={item}>
              <a className="nav-link" href={`#${item.toLowerCase().replace(' ', '')}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
