
import "./Footer.css"
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { fab,faFacebook, faTwitter,faInstagram,faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faHeart,faPhone,faLocationPin,faTools,faUserShield,faBars ,faTimes,faSackDollar,faUser,faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
// import {faAirbnb} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const fbnerd = "https://m.me/Nerdarr"
    const fbMillie = "https://m.me/klawedbymillie"
    return (<> 
    <div className="FooterCover">
         <div className="FooterInCover">
             <div className="iconRow">
                   <div className="rowPart">
                         <div className="Footericons">
                            
                              <FontAwesomeIcon className="fontawesomIcons" icon={faFacebook}><Link className='text-link' to={fbMillie}></Link> </FontAwesomeIcon> 
                              {/* <Link className='text-link' to={fbMillie}> <FontAwesomeIcon className="fontawesomIcons" icon={faFacebook} /></Link> */}
                                <FontAwesomeIcon className="fontawesomIcons" icon={faTwitter} />
                                <FontAwesomeIcon className="fontawesomIcons" icon={faYoutube} />
                                <FontAwesomeIcon className="fontawesomIcons" icon={faInstagram} />
                                <FontAwesomeIcon className="fontawesomIcons" icon={faLinkedin} />
                        </div>
                   </div>
                   <div className="rowPart">
                        <p>2023 © Alconnect Beauty. All Rights Reserved.</p>
                   </div>
                
             </div>
             <div className="devRow">
                     <div className="DevRowPart">
                        <p>Developed with</p>
                        <FontAwesomeIcon className="fontawesomIcons" icon={faHeart} />
                        <Link className='text-link' to={fbnerd}><p><u>@Nerdarr</u></p></Link>
                   </div>

             </div>
            
        </div>
            
    </div>

    </>)
};

export default Footer;