import React from 'react';

const Contact = () => {
  return (
    <section id = "contact" className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="mb-4">Contact Me 📬 </h2>
        <p className="lead mb-4">
          Interested in collaborating or just want to say hi? <br />
          Drop a message and I’ll get back to you soon!
        </p>
        <a
          href="mailto:your.SharvanDas@gmail.com"
          className="btn btn-outline-info btn-lg"
        >
          Send Email
        </a>
      </div>
      <br/>
          <br/>
          <div className="container text-center text-glow"><h3>**Website Work in Progress**</h3></div>
    </section>
  );
};

export default Contact;
