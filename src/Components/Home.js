import React, { useState,useEffect } from 'react';
import './Home.css';
import Footer from './Footer/Footer';
import useContentful from './Hooks/useContentful';
import { Link } from 'react-router-dom';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [viz,setViz] = useState(false);
  const [phone,setPhone] = useState();
  const [cardData, setCardData] = useState()

  const {getAuthors} = useContentful()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
  };

  useEffect(() => {
    console.log("Hello")
 
    getAuthors().then((response) => response && setCardData(response)
    
    
    );
    console.log("respng",cardData)
//   getPosters().then((response) => response && console.log("hero",response));
},[]);



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

        <div className='rescheckBtn'>
             <button onClick={()=>{
              console.log("Been clicked")
              
              setViz(!viz)}} className='rescheck'>CHECK RESERVATION</button>
        </div>
        
        {viz   && <> 


          <div className='resInputs'>

            <div className='resInputsSec'>


                            <div className='actualinputs'>
                            <input onChange={(e)=>{setPhone(e.target.value)
                              console.log("phone",phone)
                            }} value={phone} placeholder='Phone number'/> 
                            </div>
                            <div className='actualinputs'>
                            <input placeholder='RSVP Code'/> 
                            </div>
                            {/* <div className='CTA'>
                                    <button>Search</button>
                            </div> */}
                </div>
            </div>

            

         

            {cardData &&
                (cardData.filter(item => item.phone == phone).length > 0 ? (
                  cardData
                    .filter(item => item.phone == phone)
                    .map((item, index) => {
                      return (
                        <div key={index}>
                         
                          
                                <div className='wholerescover'> 

                                    <div className='resdetails'>

                                          <h2>Reservation Details</h2>

                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Name:</b></p>
                                                </div>
                                                <div className='Value'>
                                                        <p>{item?.name}</p>
                                                </div>
                                          </div>

                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Reservation status:</b></p>
                                                </div>
                                                <div className={item?.reservation ? "TValue": "FValue"}>
                                                      <p>{item?.reservation ? 'Confirmed' : 'Pending'}</p>
                                                </div>
                                          </div>

                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Confirmation status:</b></p>
                                                </div>
                                                <div className={item?.confirmation ? "TValue": "FValue"}>
                                                {/* <p>Reservation: {fields.reservation ? 'Yes' : 'No'}</p> */}
                                                 <p>{item.confirmation ? 'Confirmed' : 'Pending'}</p>
                                                </div>
                                          </div>

                                          <h3>Church Service</h3>

                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Church:</b></p>
                                                </div>
                                                <div className='Value'>
                                                          <p>Linda Holy family Parish</p>
                                                </div>
                                          </div>
                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Time:</b></p>
                                                </div>
                                                <div className='Value'>
                                                          <p>08hrs</p>
                                                </div>
                                          </div>
                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Directions:</b></p>
                                                </div>
                                                <div className='Value'>
                                                     <p><Link className='linkitem' to={'https://maps.app.goo.gl/8wL7zZHiNiNCQpc78'}>Click Me!</Link></p>
                                                </div>
                                          </div>
                                          <h3>Photo session</h3>

                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Venue:</b></p>
                                                </div>
                                                <div className='Value'>
                                                          <p>Munda Wanga Botany and Park</p>
                                                </div>
                                          </div>
                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Time:</b></p>
                                                </div>
                                                <div className='Value'>
                                                          <p>12:00 AM</p>
                                                </div>
                                          </div>
                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Directions:</b></p>
                                                </div>
                                                <div className='Value'>
                                                          <p><Link className='linkitem' to={'https://g.co/kgs/vVKVdtV'}>Click Me!</Link></p>
                                                </div>
                                          </div>
                                          <h3>Reception</h3>

                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Venue:</b></p>
                                                </div>
                                                <div className='Value'>
                                                          <p>Kuema Event Services</p>
                                                </div>
                                          </div>
                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Time:</b></p>
                                                </div>
                                                <div className='Value'>
                                                          <p>16hrs</p>
                                                </div>
                                          </div>
                                          <div className='container'>
                                                <div className='Metric'>
                                                          <p><b>Directions:</b></p>
                                                </div>
                                                <div className='Value'>
                                                       <p><Link className='linkitem' to={'https://g.co/kgs/qDLgsfc'}>Click Me!</Link></p>
                                                </div>
                                          </div>

                                      

                                    </div>

                            </div>
                        
                        </div>
                      );
                    })
                ) : (
                  <p className='FValue'>No reservation found</p>
                ))}


        
           </>
        }
       
       
       

        



        {/* <p>RSVP section goes here.</p> */}
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
        <p><b>Check Under reservation.</b></p>
      </section>

      <Footer/>
    </div>

    
  );
}

export default App;
