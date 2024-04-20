
import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { fab,faFacebook, faTwitter,faInstagram,faYoutube, faLinkedin, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {faHeart,faPhone,faLocationPin,faTools,faUserShield ,faTimes,faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
// import img1 from  "../../Images/UnilusPNG3.png"
// import img1 from  "../Images/Alcon1.jpg"


import "./NavBar.css"


function NavBar() { 

    const [ visible, setVisible] = useState(false); 
    const [ navDrop, setnavDrop] = useState(false); 
    const [ navDropSec, setnavDropSec] = useState(false); 
    const [isOpen, setIsOpen] = useState(false);

    let listener = null
    const [scrollState, setScrollState] = useState(false)


    //Changes NavBar color when you scroll over 120 pixels
    useEffect(() => {
      listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 120) {
          if (scrollState !== true) setScrollState(true)
        } else {
          if (scrollState !== false) setScrollState(false)
        }
      })
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [scrollState])


    // <div className='toggle' onClick={HandleDrop}>
    const HandleDrop = () =>{
        setnavDrop(prev => !prev)
    }
    const HandleSecDrop = () =>{
        setnavDropSec(prev => !prev)
      
    }

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        toggleMenu();
      };

      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    
 

  return <>
    
    {/* <div className='NavWhole'> */}
    
    <div className={scrollState? "scrollCover": "NavWhole"}>

            <div className='resNav'>
                        <div className='logo'>
                                 {/* <h1>Twalumba</h1> */}
                                 {/* <img src={img1}></img> */}
                                 <Link to={"/"} className='linkItem'>
                                         {/* <img src={img1}></img> */}
                                         <h2>Ignatius & Patience</h2>
                                    {/* <button>BOOK NOW</button> */}
                                    </Link>
                                

                             </div>
                        
                             <div className='toggle' onClick={HandleSecDrop}>
                             {navDropSec ?
                               <FontAwesomeIcon className="fontawesomIcons" icon={faTimes} />:
                               <FontAwesomeIcon className="fontawesomIcons" icon={faBars} />
                            }
                               {/* <FontAwesomeIcon className="fontawesomIcons" icon={faBars} /> */}
                        </div>

            </div>

               
                 
                <div className='listItems'>

                    <div className='firstItem'>
                    <ul>
                        <li>
                             <div className='logo'>
                               
                                 <Link to={"/"} className='linkItem'>
                                 <h2>Ignatius & Patience</h2>
                                         {/* <img src={img1}></img> */}
                                    {/* <button>BOOK NOW</button> */}
                                    </Link>
                                  

                             </div>
                        </li>
                    </ul>

                    </div>
                    {/* <div className='secItem'> 

                            <ul>

                        

                                <li className='serviceItem'><a className='linkItem' href="#Iggy">Skin care</a> </li>
                              
                                <li className='serviceItem'><Link to={"/"} className='linkItem'>Lips</Link></li>
                                <li className='serviceItem'><Link to={"/"} className='linkItem'>Eyes</Link></li>
                                <li className='serviceItem'><Link to={"/"} className='linkItem'>Accessories</Link></li>
                                <li className='serviceItem'><Link to={"/"} className='linkItem'>Nails</Link></li>
                            
                        </ul>

                    </div> */}
                    <div className='thirdItem'> 
                                    
                         <div className='secItem'> 

                            <ul>

                        

                                {/* <li className='serviceItem'><a className='linkItem' href="#Iggy">Skin care</a> </li>
                              
                                <li className='serviceItem'><Link to={"/"} className='linkItem'>Lips</Link></li> */}
                                <li className='serviceItem'><Link to={"/"} className='linkItem'><span onClick={() => scrollToSection('how-we-met')}>How We Met</span></Link></li>
                                <li className='serviceItem'><Link to={"/"} className='linkItem'>  <span onClick={() => scrollToSection('proposal')}>| Proposal</span></Link></li>
                                <li className='serviceItem'><Link to={"/"} className='linkItem'><span onClick={() => scrollToSection('rsvp')}>| Reservations</span></Link></li>
                                <li className='serviceItem'><Link to={"/"} className='linkItem'> <span onClick={() => scrollToSection('locations')}>| Directions</span></Link></li>

                                
       
        
                            
                        </ul>

                    </div>

                    </div>
                

                </div>
                <div className= {navDrop?'dropView':"noDrop"} >
                    {/* <div className='dropCover'>
                    <div className='dropItem'>
                        <div className='dropHeading'>
                                <h2>The Resort</h2>
                        </div>
                        <div className='dropList'>
                            <ul>
                            <li>Rooms</li>
                            <li>Suites</li>
                            <li>Gallery</li>
                            <li>Offers</li>
                            <li>Enhancements</li>
                            <li>Accessibility</li>
                            <li>FAQ</li>
                            <li>Report Policies</li>
                            <li>Clean & Care Commitment</li>
                        
                        </ul>   

                        </div>

                    </div>
                    <div className='dropItem'>
                        <div className='dropHeading'>
                                <h2>Dine</h2>
                        </div>
                        <div className='dropList'>
                        <ul>
                            <li>A.R. Valentien</li>
                            <li>The Grill</li>
                            <li>Cullinary Events</li>
                            <li>Private Dinning</li>
                            <li>Celebrate the Craft</li>
                            <li>Our Cullinary Team</li>
                        </ul>

                        </div>

                    </div>
                    <div className='dropItem'>
                        <div className='dropHeading'>
                                <h2>Activites</h2>
                        </div>
                        <div className='dropList'>
                        <ul>
                            <li><Link to={"/"} className='linkItem'></Link>Events</li>
                            <li><Link to={"/"} className='linkItem'></Link>Resort Activites</li>
                            <li><Link to={"/"} className='linkItem'></Link>Area Activites</li>
                            <li><Link to={"/"} className='linkItem'></Link>Resort Map</li>
                            <li><Link to={"/"} className='linkItem'></Link>Golf Course</li>
                            <li><Link to={"/"} className='linkItem'></Link>Tournamentts</li>
                            <li><Link to={"/"} className='linkItem'></Link>Life Camera</li>
                        
                        </ul>
                          

                        </div>

                    </div>
                    <div className='dropItem'>
                        <div className='dropHeading'>
                                <h2>Spa</h2>
                        </div>
                        <div className='dropList'>
                        <ul>
                            <li>Spa Services</li>
                            <li>How to Spa</li>
                            <li>Spa Services</li>
                            <li>Loyalty Program</li>
                            <li>Shop</li>
                         </ul> 

                        </div>

                    </div>
                    <div className='dropItem'>
                        <div className='dropHeading'>
                                <h2>Meetings</h2>
                        </div>
                        <div className='dropList'>
                        <ul>
                            <li>Meeting Venues</li>
                            <li>Meeting Services</li>
                            <li>Sip and Swing</li>
                            <li>Catering</li>
                            <li>Sales Team</li>
                            <li>Submit and RFP</li>
                            <li>Photo Gallery Events</li>

                        </ul>   

                        </div>

                    </div>
                    <div className='dropItem'>
                        <div className='dropHeading'>
                                <h2>Weddings</h2>
                        </div>
                        <div className='dropList'>
                        <ul>
                            <li>Real Weddings</li>
                            <li>Wedding Venues</li>
                            <li>Collections</li>
                            <li>Celebrations</li>
                            <li>Request a quote</li>
                        </ul>
                           

                        </div>

                    </div>

                    </div> */}
                    

                </div>
                {/* response drop nav */}
                {/* <div className='SecResDrop'> */}
                <div className= {navDropSec?'SecResDrop':"noSecDrop"}>
                    <div className='secDropCover'>

                                <ul>
                                    <li><Link to={"/"} className='linkItem'><span onClick={() => scrollToSection('how-we-met')}>How We Met</span></Link></li>
                                    <li><Link to={"/"} className='linkItem'><span onClick={() => scrollToSection('proposal')}> Proposal</span></Link></li>
                                    <li><Link to={"/"} className='linkItem'><span onClick={() => scrollToSection('rsvp')}> Reservations</span></Link></li>
                                    <li><Link to={"/"} className='linkItem'> <span onClick={() => scrollToSection('locations')}>Directions</span></Link></li>
                                  
                                 
                                
                                
                                </ul>

                    </div>
                  

                </div>
                
    </div>
  
  </>
  
  ;
}

export default NavBar;