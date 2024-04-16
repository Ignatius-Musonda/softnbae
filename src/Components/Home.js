import React, { useState } from 'react';
import './Home.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
  };

  return (
    <div className="App">
      <nav className={isOpen ? 'nav-open' : ''}>
        <div className="nav-left">
          <span onClick={() => scrollToSection('intro')}>I</span>
          <span onClick={() => scrollToSection('proposal')}>P</span>
        </div>
        <div className="nav-right">
          <span onClick={() => scrollToSection('rsvp')}>RSVP</span>
          <span onClick={() => scrollToSection('how-we-met')}>How We Met</span>
          <span onClick={() => scrollToSection('locations')}>Locations</span>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <div className="hero" id="intro">
        <h1>John & Jane</h1>
        <p>Save the Date</p>
        {/* rrr */}
      </div>
      <section className="content" id="proposal">
        <h2>Proposal</h2>
        <p>This is where you tell the story of your proposal.</p>
      </section>
      <section className="content" id="rsvp">
        <h2>RSVP</h2>
        <p>RSVP section goes here.</p>
      </section>
      <section className="content" id="how-we-met">
        <h2>How We Met</h2>
        <p>Share your love story here.</p>
      </section>
      <section className="content" id="locations">
        <h2>Locations</h2>
        <p>Details about wedding locations.</p>
      </section>
    </div>
  );
}

export default App;
