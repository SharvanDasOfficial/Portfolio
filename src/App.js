import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css'; // Ensure this is imported for 3D styles
// import other components as you build them

function App() {
  return (
    <>
      <Header />
      <main className="container mt-5 px-3 py-4 bg-dark rounded-3 text-light" style={{ minHeight: '80vh' }}>
        {/* <Hero /> Your other sections go here */}
        <Hero />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default App;
