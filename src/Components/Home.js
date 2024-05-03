import React, { useState,useEffect } from 'react';
import './Home.css';
import BounceLoader from "react-spinners/BounceLoader";
import Footer from './Footer/Footer';
import useContentful from './Hooks/useContentful';
import { Link } from 'react-router-dom';
//import ics from 'ics'; // Import the ics package
import {createEvent} from 'ics';
import NavBar from './NavBar/NavBar';
// const ics = require('ics')



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [viz,setViz] = useState(false);
  const [phone,setPhone] = useState();
  const [cardData, setCardData] = useState()
  const [searching, setSearching] = useState(false);

  const {getAuthors} = useContentful()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  const newEvent = {
    BEGIN: 'VCALENDAR',
    PRODID: 'www.website.com',
    UID: 'info@website.com',
    CATEGORIES: 'APPOINTMENT',
    DTSTART: '20140321T153010Z',
    DTEND: '',
    SUMMARY: 'My great event',
    DESCRIPTION: 'Great event in your town',
    END: 'VCALENDAR',
  };

  const formatDate = (dateString) => {
    return dateString.replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/, "$1-$2-$3T$4:$5:$6");
  };

  // const handleDownloadCalendar = () => {
    
  //   let formattedDate = formatDate(newEvent.DTSTART);
  //   let cal = ics();
  //   cal.addEvent({
  //     start: formattedDate,
  //     end: formattedDate,
  //     title: newEvent.SUMMARY,
  //     description: newEvent.DESCRIPTION,
  //     location: '',
  //   });

  //   cal.download('my_calendar');
  // };

  /////

  const event = {

        start: [2018, 5, 30, 6, 30],
        duration: { hours: 6, minutes: 30 },
        title: 'Bolder Boulder',
        description: 'Annual 10-kilometer run in Boulder, Colorado',
        location: 'Folsom Field, University of Colorado (finish line)',
        url: 'http://www.bolderboulder.com/',
        geo: { lat: 40.0095, lon: 105.2669 },
        categories: ['10k races', 'Memorial Day Weekend', 'Boulder CO'],
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
        organizer: { name: 'Admin', email: 'Race@BolderBOULDER.com' },
    
  }
  
  async function handleDownload() {
    console.log("i am here")
    const filename = 'ExampleEvent.ics'
    const file = await new Promise((resolve, reject) => {
      createEvent(event, (error, value) => {
        if (error) {
          reject(error)
        }
  
        resolve(new File([value], filename, { type: 'text/calendar' }))
      })
    })
    const url = URL.createObjectURL(file);
  
    // trying to assign the file URL to a window could cause cross-site
    // issues so this is a workaround using HTML5
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
  
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  
    URL.revokeObjectURL(url);
  }

  /////

  

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
      {/* <nav className={isOpen ? 'nav-open' : ''}>
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
      </nav> */}

      <NavBar/>
      <div className="hero" id="intro">
        <h1>Ignatius & Patience</h1>
              <button onClick={() => scrollToSection('rsvp')}>RESERVATIONS</button>
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

                                   setSearching(true);

                                  // Here you can add your code to perform the search or any other action

                                  // For demonstration purposes, let's simulate a delay
                                  setTimeout(() => {
                                      // Hide the searching message after some time (simulated delay)
                                      setSearching(false);
                                  }, 2000); // Change 2000 to the desired delay in millisecond


                              console.log("phone",phone)
                            }} value={phone} placeholder='Phone number'/> 
                            </div>
                            <div className='actualinputs'>
                            <input placeholder='RSVP Code'/> 
                            </div>

                            {/* Display the searching message if searching state is true */}

                           
                            {/* <div className='CTA'>
                                    <button>Search</button>
                            </div> */}
                </div>
                        
          
            </div>  


            <div className='laodersSearch'>
                            <div className='innerload'>
                            {searching && <><p></p><BounceLoader/></>}
                            </div>
                            
                        </div>

            

         

            {cardData &&
                (cardData.filter(item => item.phone == phone?.length > 0 && item.phone == phone )? (
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
                                                          <p>09hrs</p>
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
                                                          <p>15hrs</p>
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
                  <p className='FValue'>{phone?.length > 0 ? (searching ? "" : "No reservation found") : ""}</p>
                
                  


                ))}



        
           </>
        }
       
       <p className='FValue'>{phone?.length > 0 ? (searching ? "" : "No reservation found") : ""}</p>
       

        



        {/* <p>RSVP section goes here.</p> */}
      </section>

      <section className="content" id="how-we-met">
        <h2>How We Met</h2>
        <div className='paraCover'> 
              <div className='paragraph'>
                  <p><b>[Officially atleast😁]</b>The year is 2019, Back from a Heart of Worship CBU choir trip from Ndeke, Patience sat at a window seat, Ignatius a callapsable bus passageway seat. At some point next to eachother Ignatius charmingly said Hi to Patience and told her he'd been studying her for months, knew her favorite color, dress, best friend and what makes her happy, she shocked at the confidence & humour, smiled with a blushed up look, rest is <b>4th of May 😉</b></p>
              </div>

        </div>
           
       
      </section>

      <section className="content" id="proposal">
        <h2>Proposal</h2>
        <div className='paraCover'>

        <div className='paragraph'>
             <p>On August 4th, 2023, Ignatius planned a 'Post-Graduation Dinner' for Patience at a lodge in Kitwe. Unbeknownst to Patience, it was no ordinary meal. As they approached their table, she noticed the romantic decor, candles, and heard soft, romantic Sax music playing. In the midst of it all was a message stand with the words 'Patience, will you marry me?' Patience was in serious shock almost disappeared but eventually caught up with the moment. To her surprise, most of their friends were there. She said yes!</p>
        </div>

      </div>
       
        
      </section>
    
      
      <section className="content" id="locations">
        <h2>Locations</h2>
        <p><b>Check Under <span onClick={() => scrollToSection('locations')}>Reservations</span>.</b></p>
      </section>

      <Footer/>
    </div>

    
  );
}

export default App;
