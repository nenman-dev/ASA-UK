import {useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu_icon.png'
import close_icon from '../../assets/close_icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] =useState(false);
    useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <nav className= {`navbar ${isOpen ? "open" : ""}`}>
      <header>
        <img src= {logo} alt="" className='logo'/>
      </header>
      <div className='inner'> 
       <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}> 
          <img src={isOpen ? close_icon : menu_icon } className="icon" />
        </button> 
        <ul className={`nav-links ${isOpen ?'show' : ""}`}>
          <li><Link to = 'hero' smooth= {true} offset={0} duration={500}>WHO WE ARE</Link></li>
          <li><Link to = 'about' smooth= {true} offset={-50} duration={500}>WHAT DO WE DO</Link></li>
          <li><Link to = 'events' smooth= {true} offset={-150} duration={500}>EVENTS</Link></li>
          <li><Link to = 'pillars' smooth= {true} offset={-120} duration={500}>JOIN & SUPPORT</Link></li>
          <li><Link to = 'latest' smooth= {true} offset={-600} duration={500}>NEWS</Link></li>
          <li><Link to = 'brands' smooth= {true} offset={-130} duration={500}className='btn orange'>BECOME A MEMBER</Link></li>
          <li><Link to = 'top-footer' smooth= {true} offset={170} duration={500}className='btn green'>DONATE</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar