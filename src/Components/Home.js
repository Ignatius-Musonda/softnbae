import React, { useState } from 'react';
import './Home.css';
import Footer from './Footer/Footer';

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
        <h1>Ignatius & Patience</h1>
        <p>Save the Date</p>
        {/* rrr */}
      </div>
      <section className="content" id="rsvp">
        <div className='Details'>
            <div className='Names'>
                      <h1>Ignatius Musonda</h1>
                      <h1>&</h1>
                      <h1>Patience Chamakuwa</h1>
            </div>
            <div className='Dates'>
                          <h3>May 4th, 2024</h3>
                          <h3> RSVP by April 27, 2024</h3>
                     
            </div>
        </div>
        <button>CHECK RESERVATION</button>
        <p>RSVP section goes here.</p>
      </section>

      <section className="content" id="proposal">
        <h2>Proposal</h2>
        <div className='paraCover'>

        <div className='paragraph'>
             <p>Hanna & Caleb planned their first trip to Japan together in March 2017. Caleb planned a romantic picnic in Nogawa park and popped the question under the beautiful cherry blossom trees. Hanna gave a big smile and said yes! They celebrated with Hanna’s family and friends that night with a champagne toast..</p>
        </div>

      </div>
       
        
      </section>
    
      <section className="content" id="how-we-met">
        <h2>How We Met</h2>
        <div className='paraCover'> 
              <div className='paragraph'>
                  <p>This section can be used for taking your guests for a ride down memory lane and give them some insight into your journey so far. If you've been together for a while, some guests may have no idea how you two got together! Recounting your story is a fun way to share those hilarious, heartfelt and unique moments that have define who you are as a couple. Stories you might want to share are how you met, your first date, your proposal story, and any other defining and memorable moments in your relationship.</p>
              </div>

        </div>
           
       
      </section>
      <section className="content" id="locations">
        <h2>Locations</h2>
        <p>Details about wedding locations.</p>
      </section>

      <Footer/>
    </div>

    
  );
}

export default App;