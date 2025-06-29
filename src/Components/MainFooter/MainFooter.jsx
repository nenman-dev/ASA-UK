import React from 'react'
import './MainFooter.css'
import fb_img from '../../assets/facebook.svg'
import ig_img from '../../assets/insta.svg'
import yt_img from '../../assets/youtube.svg'
import tt_img from '../../assets/twitter.svg'
import mx_img from '../../assets/mixcloud.png'

const MainFooter = () => {
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
                <p><span className="label">e-mail</span></p>
                <p>hello@ras.com</p>
                <p><span className="label"> address</span></p>
                <p>The Royal African Society is hosted by <br/>SOAS, University of London.</p>
                <div className='reg'>Registered Charity by <br />S1062764</div>
            </div>
        </div>
        <div className="col-three">
            <h4>Quick Links</h4>
            <ul>
                <li>OUR MISSION</li>
                <li>WHAT WE DO</li>
                <li>EVENTS</li>
                <li>MEMBERSHIP</li>
                <li>CONTACT US</li>
            </ul>
        </div>
        <div className="col-four">
            <h4>Follow Us</h4>
            <div className="social">
                <img src={fb_img} alt="Facebook" />
                <img src={ig_img} alt="Instagram" />
                <img src={yt_img} alt="YouTube" />
                <img src={tt_img} alt="Twitter" className='icon_twitter' />
                <img src={mx_img} alt="Mixcloud" className='icon_mix'/> 
            </div>
        </div>

      </div>
    </div>
  );
};

export default MainFooter;