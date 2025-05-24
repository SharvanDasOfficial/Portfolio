import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-center text-light py-3 mt-5">
      &copy; {new Date().getFullYear()} Sharvan — Built with <span role="img" aria-label="heart">❤️</span>
    </footer>
  );
}

export default Footer;
