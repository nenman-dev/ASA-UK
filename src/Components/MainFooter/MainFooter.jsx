import React from 'react'
import './MainFooter.css'
import { Link } from 'react-scroll';
import fb_img from '../../assets/facebook.svg'
import ig_img from '../../assets/insta.svg'
import yt_img from '../../assets/youtube.svg'
import tt_img from '../../assets/twitter.svg'
import mx_img from '../../assets/mixcloud.png'

const MainFooter = () => {

    const socialLinks = {
        facebook: "https://facebook.com/yourpage",
        instagram: "https://instagram.com/yourprofile",
        youtube: "https://youtube.com/yourchannel",
        twitter: "https://twitter.com/yourhandle",
        mixcloud: "https://mixcloud.com/yourprofile"
    }

  return (
    <div className="main-footer">
      <div className="main-footer-col">
            <div className="col-one">
                <h4>Our Mission</h4>
                <p>The Royal African Society is a membership organisation that provides opportunities for people to connect, celebrate and engage critically with a wide range of topics and ideas about Africa today.</p>
                <p> We amplify African voices and interests in academia, business, politics, the arts and education, reaching a network of more than one million people globally.</p>
            </div>
        <div className="col-two">
            <h4>Contact Us</h4>
            <div className="contact-details">
                <p>e-mail</p>
                <p>
                   <a href="mailto:hello@ras.com" className="label">hello@ras.com</a>
                </p>
                 <p>address</p>
                <p>
                    <a href="" target="_blank" rel="noopener noreferrer" className="label">The Royal African Society is hosted by <br/>SOAS, University of London.</a>
                </p>
                <div className='reg'>Registered Charity by <br />S1062764</div>
            </div>
        </div>
        <div className="col-three">
            <h4>Quick Links</h4>
            <ul>
                <li><Link to = 'hero' smooth= {true} offset={0} duration={500}>OUR MISSION</Link></li>
                <li><Link to = 'about' smooth= {true} offset={-50} duration={500}>WHAT DO WE DO</Link></li>
                <li><Link to = 'events' smooth= {true} offset={-150} duration={500}>EVENTS</Link></li>
                <li><Link to = 'join' smooth= {true} offset={-120} duration={500}>MEMBERSHIP</Link></li>
                <li><Link to = 'main-footer' smooth= {true} offset={-100} duration={500}>CONTACT US</Link></li>
            </ul>
        </div>
        <div className="col-four">
            <h4>Follow Us</h4>
            <div className="social">
                <a href={socialLinks.facebook} target="_blank">
                    <img src={fb_img} alt="Facebook" />
                </a>
                <a href={socialLinks.instagram} target="_blank">
                    <img src={ig_img} alt="Instagram" />
                </a>
                <a href={socialLinks.youtube} target="_blank">
                    <img src={yt_img} alt="YouTube" />
                </a>
                <a href={socialLinks.twitter} target="_blank">
                    <img src={tt_img} alt="Twitter" className='icon_twitter' />
                </a>
                <a href={socialLinks.mixcloud} target="_blank">
                    <img src={mx_img} alt="Mixcloud" className='icon_mix'/>
                </a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default MainFooter;